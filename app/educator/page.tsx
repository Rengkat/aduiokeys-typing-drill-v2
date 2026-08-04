// app/educator/page.tsx
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, GraduationCap, Download, Upload, Users2 } from "lucide-react";
import { useProfile } from "@/hooks/useProfile";
import { useAudio } from "@/hooks/useAudioEngine";
import { getDB } from "@/db/client";
import {
  exportProfileData,
  downloadProfileExport,
  parseExportBundle,
  importProfileData,
} from "@/db/exportImport";
import type { UserProfile } from "@/types/profile";

export default function EducatorPage() {
  const router = useRouter();
  const { currentProfile } = useProfile();
  const { speak, playSound } = useAudio();

  const [classCode, setClassCode] = useState(currentProfile?.classCode ?? "");
  const [students, setStudents] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const announce = (text: string, options?: Parameters<typeof speak>[1]) => {
    setStatusMessage(text);
    speak(text, options);
  };

  const loadStudents = useCallback(async (code: string) => {
    if (!code.trim()) {
      setStudents([]);
      return;
    }
    setLoading(true);
    try {
      const db = await getDB();
      const profiles = await db.getAll("profiles");
      setStudents(profiles.filter((p) => p.classCode === code.trim().toUpperCase()));
    } catch (error) {
      console.error("Failed to load class roster:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    (async () => {
      if (classCode) await loadStudents(classCode);
      speak("Educator tools. Look up a class to view and export student progress.", {
        priority: "high",
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    loadStudents(classCode);
    playSound("select");
  };

  const handleExport = async (username: string) => {
    try {
      const bundle = await exportProfileData(username);
      downloadProfileExport(bundle);
      playSound("success");
      announce(`Exported progress for ${username}.`, { priority: "high" });
    } catch (error) {
      console.error("Export failed:", error);
      announce("Export failed. Please try again.", { priority: "high" });
      playSound("error");
    }
  };

  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const bundle = parseExportBundle(text);
      await importProfileData(bundle);
      playSound("success");
      announce(`Imported progress for ${bundle.profile.username}.`, { priority: "high" });
      if (classCode) loadStudents(classCode);
    } catch (error) {
      console.error("Import failed:", error);
      announce("That file couldn't be imported. Please check it's a valid AudioKeys export.", {
        priority: "high",
      });
      playSound("error");
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen py-8 animate-fade-in">
      <div aria-live="polite" className="sr-only">
        {statusMessage}
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <button
          onClick={() => router.push("/")}
          className="text-accent hover:text-accent-hover flex items-center gap-2 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="glass-card">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-accent" />
            <div>
              <h1 className="text-3xl font-bold">Educator Tools</h1>
              <p className="text-text-muted">Look up a class, export or import student progress</p>
            </div>
          </div>
        </div>

        <div className="glass-card">
          <form onSubmit={handleLookup} className="flex gap-3 items-end flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <label htmlFor="lookupCode" className="block text-sm font-medium text-text-muted mb-2">
                Class code
              </label>
              <input
                id="lookupCode"
                type="text"
                value={classCode}
                onChange={(e) => setClassCode(e.target.value)}
                className="input-field text-lg uppercase"
                placeholder="e.g., MRSMITH1"
              />
            </div>
            <button type="submit" className="btn-primary">
              Look Up Class
            </button>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="btn-secondary flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Import Student File
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/json"
              onChange={handleImportFile}
              className="sr-only"
            />
          </form>
        </div>

        {loading ? (
          <div className="glass-card text-center py-12 text-text-muted">Loading roster...</div>
        ) : students.length > 0 ? (
          <div className="glass-card">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Users2 className="w-5 h-5 text-accent" />
              {students.length} student{students.length === 1 ? "" : "s"} in class{" "}
              {classCode.toUpperCase()}
            </h2>
            <div className="space-y-2">
              {students.map((student) => (
                <div
                  key={student.username}
                  className="flex items-center justify-between p-3 rounded-lg bg-dark-secondary/50">
                  <div>
                    <div className="font-medium">{student.username}</div>
                    <div className="text-xs text-text-muted">
                      {student.level.replace("_", " ")} ·{" "}
                      {student.fluencyScore ? `${Math.round(student.fluencyScore)}% fluency` : "no sessions yet"}
                    </div>
                  </div>
                  <button
                    onClick={() => handleExport(student.username)}
                    className="btn-secondary px-3 py-1.5 text-sm flex items-center gap-2">
                    <Download className="w-3.5 h-3.5" />
                    Export
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : classCode ? (
          <div className="glass-card text-center py-12 text-text-muted">
            No students found for class {classCode.toUpperCase()} on this device.
          </div>
        ) : null}
      </div>
    </div>
  );
}
