"use client";

import { useState } from "react";
import { BarChart3, FileText, Globe2, Mic, Newspaper, Tags } from "lucide-react";

const rows = [
  { title: "Why the cedi moved this quarter", kind: "Article", status: "Published", tone: "ok" },
  { title: "Remarks to the regional energy forum", kind: "Speech", status: "Scheduled for Friday", tone: "soon" },
  { title: "Notes on financing infrastructure", kind: "Article", status: "In review", tone: "wait" },
  { title: "Interview request: policy podcast", kind: "Enquiry", status: "New", tone: "new" },
];
const tones: Record<string, string> = {
  ok: "bg-[#E3F6EC] text-[#0B7A4B]",
  soon: "bg-[#E6E9FF] text-[#2A317F]",
  wait: "bg-[#FDF0D2] text-[#8A5A00]",
  new: "bg-[#FDECE8] text-[#A8341B]",
};
const weeks = [32, 41, 38, 55, 49, 72, 64, 88];
const sources = [
  ["Search", 38],
  ["Newsletter", 29],
  ["Social", 21],
  ["Direct", 12],
] as const;
const places = ["Ghana", "Nigeria", "United Kingdom", "Germany", "United States"];

export function StudioPreview() {
  const [tab, setTab] = useState<"studio" | "analytics">("studio");
  const tabs = [
    ["studio", "Content studio"],
    ["analytics", "Analytics"],
  ] as const;
  return (
    <div className="min-w-0 max-w-full overflow-hidden rounded-[24px] bg-white text-ink shadow-[0_40px_80px_-40px_rgba(16,18,43,0.6),0_0_0_1px_rgba(16,18,43,0.08)]">
      <div className="flex items-center gap-4 border-b border-[var(--line)] bg-chalk-dim px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="h-2.5 w-2.5 rounded-full bg-ink/20" />
          <i className="h-2.5 w-2.5 rounded-full bg-ink/20" />
          <i className="h-2.5 w-2.5 rounded-full bg-ink/20" />
        </span>
        <div role="tablist" aria-label="Preview" className="flex gap-1">
          {tabs.map(([id, label]) => (
            <button
              key={id}
              role="tab"
              type="button"
              id={`tab-${id}`}
              aria-selected={tab === id}
              aria-controls={`panel-${id}`}
              onClick={() => setTab(id)}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                tab === id ? "bg-ink text-white" : "text-slate hover:bg-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {tab === "studio" ? (
        <div id="panel-studio" role="tabpanel" aria-labelledby="tab-studio" className="grid min-w-0 min-h-[360px] grid-cols-[minmax(0,1fr)] sm:grid-cols-[170px_minmax(0,1fr)]">
          <ul className="hidden gap-1 border-r border-[var(--line)] p-3 text-sm sm:grid sm:content-start">
            {[
              [FileText, "Articles"],
              [Mic, "Speeches"],
              [Tags, "Topics"],
              [Globe2, "Pages"],
              [Newspaper, "Newsletter"],
            ].map(([Icon, label], i) => {
              const I = Icon as typeof FileText;
              return (
                <li key={label as string} className={`flex items-center gap-2 rounded-lg px-3 py-2 ${i === 0 ? "bg-chalk font-medium" : "text-slate"}`}>
                  <I size={15} aria-hidden="true" /> {label as string}
                </li>
              );
            })}
          </ul>
          <div className="min-w-0 p-4 sm:p-5">
            <p className="font-display text-lg font-semibold tracking-tight">Everything in one queue</p>
            <ul className="mt-3 space-y-2">
              {rows.map((r) => (
                <li key={r.title} className="flex items-center justify-between gap-3 rounded-xl bg-[#F8F9FC] px-3.5 py-3">
                  <div className="min-w-0">
                    <p className="truncate text-[0.95rem] font-medium">{r.title}</p>
                    <p className="text-xs text-slate">{r.kind}</p>
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${tones[r.tone]}`}>{r.status}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate">Write, review, schedule and publish without touching code.</p>
          </div>
        </div>
      ) : (
        <div id="panel-analytics" role="tabpanel" aria-labelledby="tab-analytics" className="min-h-[360px] p-4 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-display text-lg font-semibold tracking-tight">Readers, last 8 weeks</p>
              <p className="text-xs text-slate">Sample figures</p>
            </div>
            <BarChart3 size={20} className="text-indigo" aria-hidden="true" />
          </div>
          <div className="mt-5 flex h-[120px] items-end gap-2" role="img" aria-label="Bar chart: readership rising over eight weeks">
            {weeks.map((h, i) => (
              <span key={i} className="flex-1 rounded-t-md bg-indigo/80 transition-all" style={{ height: `${h}%`, background: i === weeks.length - 1 ? "var(--flame)" : undefined }} />
            ))}
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium">Where readers come from</p>
              <ul className="mt-2 space-y-2">
                {sources.map(([name, pct]) => (
                  <li key={name} className="text-xs">
                    <span className="flex justify-between"><span>{name}</span><span className="font-mono">{pct}%</span></span>
                    <span className="mt-1 block h-1.5 rounded-full bg-chalk-dim"><span className="block h-full rounded-full bg-indigo" style={{ width: `${pct}%` }} /></span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium">Top countries</p>
              <ol className="mt-2 space-y-1.5 text-sm">
                {places.map((p, i) => (
                  <li key={p} className="flex justify-between border-b border-[var(--line)] pb-1.5 last:border-0">
                    <span>{p}</span>
                    <span className="font-mono text-xs text-slate">{i + 1}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
      <p className="border-t border-[var(--line)] bg-chalk px-5 py-2.5 text-xs text-slate">
        Interactive preview with made-up content and figures.
      </p>
    </div>
  );
}
