import { Plus } from "lucide-react";

export function Faq({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="border-t border-[var(--line)]">
      {items.map(({ q, a }) => (
        <details key={q} className="faq border-b border-[var(--line)]">
          <summary className="flex items-center justify-between gap-6 py-6">
            <span className="font-display text-xl font-semibold leading-tight tracking-tight md:text-2xl">
              {q}
            </span>
            <Plus className="faq-icon shrink-0" size={26} aria-hidden="true" />
          </summary>
          <p className="prose-s pb-7 pr-10">{a}</p>
        </details>
      ))}
    </div>
  );
}
