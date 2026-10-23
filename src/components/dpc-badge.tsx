import Image from "next/image";
import { dpc } from "@/content/site";

/** Registration notice. States the registration only; it does not claim certification or compliance. */
export function DpcBadge({
  variant = "inline",
}: {
  variant?: "inline" | "card";
}) {
  const logo = (
    <span className="shrink-0 rounded-lg bg-white p-1.5 ring-1 ring-black/10">
      <Image
        src="/brand/dpc-logo.webp"
        width={900}
        height={298}
        alt="Data Protection Commission, Ghana"
        className={variant === "card" ? "h-11 w-auto" : "h-8 w-auto"}
      />
    </span>
  );
  if (variant === "inline")
    return (
      <p className="flex items-center gap-3 text-sm leading-snug">
        {logo}
        <span>
          Registered with the {dpc.name}.
          <span className="block font-mono text-[0.78rem] opacity-70">
            Ref. {dpc.ref}
          </span>
        </span>
      </p>
    );
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      {logo}
      <p className="leading-snug">
        <span className="block font-display text-lg font-semibold tracking-tight">
          Registered with the {dpc.name}
        </span>
        <span className="block text-sm opacity-80">
          Under the {dpc.law}. Registration ref.{" "}
          <span className="font-mono">{dpc.ref}</span>
        </span>
      </p>
    </div>
  );
}
