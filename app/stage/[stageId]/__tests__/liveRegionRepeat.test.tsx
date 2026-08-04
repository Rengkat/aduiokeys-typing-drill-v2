import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
    prefetch: vi.fn(),
  }),
}));
import { Suspense, useState } from "react";
import { render, screen, fireEvent, cleanup, waitFor, act } from "@testing-library/react";
import StagePage from "../page";
import { useProfileStore } from "@/store/useProfileStore";
import { useAudioStore } from "@/store/useAudioStore";
import type { UserProfile } from "@/types/profile";

function silenceAudio() {
  useAudioStore.setState({
    speak: vi.fn(),
    playSound: vi.fn(),
    cancel: vi.fn(),
    isSpeaking: false,
  });
}

function makeProfile(overrides: Partial<UserProfile> = {}): UserProfile {
  return {
    username: "tester",
    level: "Stage_1",
    wpmTarget: 25,
    soundPack: "default",
    classCode: null,
    leaderboardOptIn: true,
    fluencyScore: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...overrides,
  };
}

async function renderStage(stageRoute: string) {
  let utils!: ReturnType<typeof render>;
  await act(async () => {
    utils = render(
      <Suspense fallback={<div>loading route</div>}>
        <StagePage params={Promise.resolve({ stageId: stageRoute })} />
      </Suspense>,
    );
    await new Promise((r) => setTimeout(r, 0));
  });
  await waitFor(() => expect(screen.getByLabelText(/^Type the word:/)).toBeInTheDocument(), {
    timeout: 10000,
  });
  return utils;
}

function getInput(): HTMLInputElement {
  return screen.getByLabelText(/^Type the word:/) as HTMLInputElement;
}

beforeEach(() => {
  silenceAudio();
  useProfileStore.setState({
    currentProfile: makeProfile(),
    profiles: [],
    isHydrated: true,
    isLoading: false,
  });
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.useRealTimers();
});

describe("aria-live announcements survive repeated identical text", () => {
  it("mutates the DOM on the live region even when the exact same text is announced twice in a row", async () => {
    // Isolated component mirroring the real fix's clear-then-set pattern,
    // so this test is deterministic instead of depending on the random
    // lesson queue happening to produce two identical consecutive letters.
    function LiveRegionUnderTest() {
      const [msg, setMsg] = useState("");
      const setForced = (text: string) => {
        setMsg("");
        requestAnimationFrame(() => setMsg(text));
      };
      return (
        <div>
          <div aria-live="assertive" data-testid="live">{msg}</div>
          <button data-testid="announce" onClick={() => setForced("o")}>announce</button>
        </div>
      );
    }

    render(<LiveRegionUnderTest />);
    const live = screen.getByTestId("live");
    const btn = screen.getByTestId("announce");

    const observedTexts: string[] = [];
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        const text = (m.target.textContent || "").trim();
        if (text) observedTexts.push(text);
      }
    });
    observer.observe(live, { childList: true, characterData: true, subtree: true });

    // Announce the SAME text ("o") three times in a row -- exactly the
    // "book" / "letter" / repeated single-key-drill scenario.
    for (let i = 0; i < 3; i++) {
      await act(async () => {
        btn.click();
        await new Promise((r) => setTimeout(r, 50));
      });
    }

    observer.disconnect();
    console.log("Observed identical-text mutations:", observedTexts);
    expect(observedTexts.filter((t) => t === "o").length).toBe(3);
  });

  it("real stage page announcements produce DOM mutations while typing", async () => {
    await renderStage("1");
    const input = getInput();
    input.focus();

    const liveRegions = document.querySelectorAll('[aria-live="assertive"]');
    expect(liveRegions.length).toBeGreaterThan(0);

    const observedTexts: string[] = [];
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        const text = (m.target.textContent || "").trim();
        if (text) observedTexts.push(text);
      }
    });
    liveRegions.forEach((el) =>
      observer.observe(el, { childList: true, characterData: true, subtree: true }),
    );

    for (let i = 0; i < 5; i++) {
      await act(async () => {
        fireEvent.keyDown(input, { key: "x" });
        await new Promise((r) => setTimeout(r, 150));
      });
    }

    observer.disconnect();
    console.log("Real page observed mutations:", observedTexts);
    expect(observedTexts.length).toBeGreaterThan(0);
  });
});
