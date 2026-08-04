import "fake-indexeddb/auto";
import "@testing-library/jest-dom/vitest";

// jsdom has no AudioContext/SpeechSynthesis. The app already wraps its
// AudioContext usage in try/catch, but stub minimal versions so nothing
// throws noisily during tests.
class FakeAudioContext {
  state = "running";
  currentTime = 0;
  destination = {};
  createStereoPanner() {
    return { pan: { value: 0 }, connect: () => {} };
  }
  createGain() {
    return {
      gain: { value: 0, exponentialRampToValueAtTime: () => {} },
      connect: () => {},
    };
  }
  createOscillator() {
    return {
      type: "sine",
      frequency: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} },
      connect: () => {},
      start: () => {},
      stop: () => {},
    };
  }
  resume() {
    return Promise.resolve();
  }
}
// @ts-expect-error - test stub
window.AudioContext = FakeAudioContext;
// @ts-expect-error - test stub
window.webkitAudioContext = FakeAudioContext;

// @ts-expect-error - test stub, not implemented in jsdom
window.speechSynthesis = {
  getVoices: () => [],
  speak: () => {},
  cancel: () => {},
  onvoiceschanged: null,
};
// @ts-expect-error - test stub
window.SpeechSynthesisUtterance = class {
  constructor(public text: string) {}
};

window.scrollTo = () => {};
Element.prototype.scrollIntoView = () => {};
