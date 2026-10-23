"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";

const students = [
  "Abena Mensah",
  "Ibrahim Yakubu",
  "Fatima Alhassan",
  "Kwame Boateng",
  "Zainab Issah",
  "Yaw Darko",
  "Mariam Abdulai",
  "Kofi Annan-Osei",
];

export function RegisterDemo() {
  const [absent, setAbsent] = useState<Set<string>>(new Set(["Kwame Boateng"]));
  const toggle = (name: string) =>
    setAbsent((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  const present = students.length - absent.size;

  return (
    <div className="rounded-[28px] bg-white p-5 text-ink shadow-[0_40px_70px_-35px_rgba(4,30,32,0.7)] sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-lg font-semibold leading-tight tracking-tight">
            JHS 2 &middot; Mathematics
          </p>
          <p className="text-sm text-slate">Period 3 &middot; Sample class</p>
        </div>
        <p className="text-right font-mono text-sm" aria-live="polite">
          <span className="text-2xl font-medium">{present}</span>
          <span className="text-slate"> / {students.length}</span>
          <span className="block text-[0.7rem] text-slate">present</span>
        </p>
      </div>
      <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
        {students.map((name) => {
          const isAbsent = absent.has(name);
          return (
            <li key={name}>
              <button
                type="button"
                aria-pressed={isAbsent}
                onClick={() => toggle(name)}
                className={`tile flex min-h-[48px] w-full items-center justify-between gap-2 rounded-xl px-3.5 text-left text-[0.95rem] font-medium transition-colors ${
                  isAbsent
                    ? "bg-[#FDECE8] text-[#A8341B]"
                    : "bg-schools-tint text-[#0A4F52] hover:bg-[#CBE8E8]"
                }`}
              >
                <span>{name}</span>
                <span className="font-mono text-xs font-medium">{isAbsent ? "Absent" : "Present"}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <p
        className="mt-4 flex items-start gap-2 rounded-xl bg-[#F3F4F9] p-3 text-sm text-slate"
        aria-live="polite"
      >
        <MessageSquare size={16} className="mt-0.5 shrink-0 text-schools" aria-hidden="true" />
        {absent.size === 0
          ? "Everyone is in. No messages to send."
          : `${absent.size} parent${absent.size > 1 ? "s" : ""} would get a text about today's absence.`}
      </p>
      <p className="mt-3 text-xs text-slate">
        Interactive preview with made-up names. Registers in Schools also work offline.
      </p>
    </div>
  );
}
