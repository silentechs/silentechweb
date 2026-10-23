"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";

// Positions are percentages of the screenshot. Both images share one layout.
const START = { x: 90, y: 78 };
const FIRST = { x: 45.9, y: 36.5 };
const SECOND = { x: 33.4, y: 36.5 };
const REST = { x: 88, y: 55 };

/** Real screenshots of the live Commerce Sell screen (demo workspace), with a short scripted tap. */
export function ProductTour({
  emptySrc,
  filledSrc,
  alt,
  domain,
  caption,
}: {
  emptySrc: string;
  filledSrc: string;
  alt: string;
  domain: string;
  caption?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);
  const [pos, setPos] = useState(START);
  const [filled, setFilled] = useState(false);
  const [ripple, setRipple] = useState<{ k: number; x: number; y: number } | null>(null);
  const [still, setStill] = useState(false);
  const count = useRef(0);

  const play = useCallback(() => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
    setFilled(false);
    setPos(START);
    const at = (ms: number, fn: () => void) =>
      timers.current.push(window.setTimeout(fn, ms));
    const tap = (p: { x: number; y: number }) =>
      setRipple({ k: ++count.current, ...p });
    at(500, () => setPos(FIRST));
    at(1450, () => tap(FIRST));
    at(1900, () => setPos(SECOND));
    at(2850, () => tap(SECOND));
    at(3050, () => setFilled(true));
    at(4300, () => setPos(REST));
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      setFilled(true);
      return;
    }
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          io.disconnect();
          play();
        }
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.current.forEach(window.clearTimeout);
    };
  }, [play]);

  return (
    <figure ref={root}>
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_30px_60px_-30px_rgba(16,18,43,0.5),0_0_0_1px_rgba(16,18,43,0.1)]">
        <div className="flex items-center gap-3 border-b border-[var(--line)] bg-chalk-dim px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <i className="h-2.5 w-2.5 rounded-full bg-ink/20" />
            <i className="h-2.5 w-2.5 rounded-full bg-ink/20" />
            <i className="h-2.5 w-2.5 rounded-full bg-ink/20" />
          </span>
          <span className="truncate rounded-md bg-white px-3 py-0.5 font-mono text-[0.72rem] text-slate">
            {domain}
          </span>
        </div>
        <div className="relative aspect-[1456/822] w-full">
          <Image
            src={emptySrc}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 92vw, 760px"
            className="object-cover"
          />
          <Image
            src={filledSrc}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 1024px) 92vw, 760px"
            className="object-cover transition-opacity duration-500"
            style={{ opacity: filled ? 1 : 0 }}
          />
          {!still && (
            <>
              {ripple && (
                <span
                  key={ripple.k}
                  className="ripple"
                  style={{ left: `${ripple.x}%`, top: `${ripple.y}%` }}
                  aria-hidden="true"
                />
              )}
              <svg
                className="tour-cursor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              >
                <path
                  d="M3 2l7.5 19 2.7-7.8L21 10.5z"
                  fill="#10122B"
                  stroke="#fff"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </>
          )}
        </div>
      </div>
      <figcaption className="meta mt-3 flex flex-wrap items-center justify-between gap-3">
        <span>{caption ?? "Screenshots of the live product, demo workspace."}</span>
        {!still && (
          <button type="button" onClick={play} className="link inline-flex items-center gap-1.5 text-ink">
            <RotateCcw size={14} aria-hidden="true" /> Replay
          </button>
        )}
      </figcaption>
    </figure>
  );
}
