import { Check } from "lucide-react";

/** Illustrative receipt, drawn in CSS. Not a screenshot. */
export function ReceiptArt() {
  return (
    <div className="receipt w-full max-w-[290px] rotate-[2deg] px-5 pt-5 font-mono text-[0.78rem] shadow-xl" aria-hidden="true">
      <p className="font-display text-base font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        Sale #1042
      </p>
      <p className="text-[0.68rem] text-slate">Saved on this phone</p>
      <dl className="mt-4 space-y-1.5 border-y border-dashed border-ink/25 py-3">
        {[
          ["2 × Bread", "₵24"],
          ["1 × Shea butter", "₵25"],
          ["3 × Sachet water", "₵4.50"],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between">
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-3 flex justify-between text-sm font-medium">
        <span>Total</span>
        <span>₵53.50</span>
      </div>
      <p className="mt-3 flex items-center gap-1 text-[0.68rem] text-[#0B7A4B]">
        <Check size={11} /> Synced when back online
      </p>
    </div>
  );
}

/** Illustrative measurement card, drawn in CSS. Not a screenshot. */
export function MeasureArt() {
  return (
    <div className="w-full max-w-[300px] -rotate-[2deg] rounded-2xl bg-white p-5 text-ink shadow-xl" aria-hidden="true">
      <p className="font-display text-base font-semibold tracking-tight">Measurements</p>
      <p className="text-[0.7rem] text-slate">Sample client</p>
      <dl className="mt-4 grid grid-cols-3 gap-2 text-center">
        {[
          ["Chest", "98"],
          ["Waist", "82"],
          ["Shoulder", "46"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl bg-[#EEF5F0] py-3">
            <dd className="font-mono text-xl font-medium">{v}</dd>
            <dt className="text-[0.66rem] text-slate">{k} cm</dt>
          </div>
        ))}
      </dl>
      <div className="tape mt-5" />
      <p className="mt-4 flex items-center justify-between rounded-xl bg-[#F3F4F9] px-3 py-2 text-[0.72rem]">
        <span className="font-medium">Order: agbada, 2 pieces</span>
        <span className="text-slate">Due Friday</span>
      </p>
    </div>
  );
}
