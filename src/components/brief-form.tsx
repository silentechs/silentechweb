"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { contact } from "@/content/site";

const needs = [
  "New software",
  "Improve what we have",
  "Advice and planning",
  "A Silentech product",
];
const stages = ["Just an idea", "Requirements written", "Existing system"];
const timelines = ["As soon as possible", "Within 3 months", "This year", "Exploring"];

function Group({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-3 font-display text-lg font-semibold tracking-tight">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <label key={o}>
            <input
              type="radio"
              name={name}
              value={o}
              checked={value === o}
              onChange={() => onChange(o)}
              className="sr-only"
            />
            <span className="chip">{o}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function BriefForm() {
  const [need, setNeed] = useState("");
  const [stage, setStage] = useState("");
  const [timeline, setTimeline] = useState("");
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [details, setDetails] = useState("");
  const [copied, setCopied] = useState(false);

  const body = [
    `Name: ${name || "-"}`,
    `Organisation: ${org || "-"}`,
    `What we need: ${need || "-"}`,
    `Where we are: ${stage || "-"}`,
    `When: ${timeline || "-"}`,
    "",
    details || "(Add a few lines about the problem here.)",
  ].join("\n");
  const subject = `Project enquiry${org ? `: ${org}` : ""}`;
  const href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`To: ${contact.email}\nSubject: ${subject}\n\n${body}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <form className="space-y-9" onSubmit={(e) => e.preventDefault()}>
      <Group legend="What do you need?" name="need" options={needs} value={need} onChange={setNeed} />
      <Group legend="Where are you now?" name="stage" options={stages} value={stage} onChange={setStage} />
      <Group legend="When do you want to start?" name="timeline" options={timelines} value={timeline} onChange={setTimeline} />
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-medium">Your name</span>
          <input className="field" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </label>
        <label className="block">
          <span className="mb-2 block font-medium">Organisation</span>
          <input className="field" value={org} onChange={(e) => setOrg(e.target.value)} autoComplete="organization" />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block font-medium">What is slowing you down?</span>
        <textarea
          className="field min-h-[150px] resize-y"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="A few lines is plenty. Who uses the system, what goes wrong, what you have tried."
        />
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <a href={href} className="btn btn-flame">
          Open in my email app
        </a>
        <button type="button" onClick={copy} className="btn btn-ghost">
          {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
          {copied ? "Copied" : "Copy as text"}
        </button>
      </div>
      <p className="meta max-w-[40em]" role="status">
        This form sends nothing by itself. It writes the email for you, and you
        press send from your own mail app. Prefer to write it yourself? Use{" "}
        <a className="link" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
        .
      </p>
    </form>
  );
}
