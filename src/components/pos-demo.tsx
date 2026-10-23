"use client";

import { useEffect, useReducer, useRef } from "react";
import {
  Check,
  Coffee,
  Droplet,
  Egg,
  Flower2,
  RefreshCw,
  Smartphone,
  Wheat,
  type LucideIcon,
} from "lucide-react";

type Item = { id: string; name: string; price: number; icon: LucideIcon };
const ITEMS: Item[] = [
  { id: "bread", name: "Bread", price: 12, icon: Wheat },
  { id: "water", name: "Sachet water", price: 1.5, icon: Droplet },
  { id: "shea", name: "Shea butter", price: 25, icon: Flower2 },
  { id: "milo", name: "Tin of Milo", price: 38, icon: Coffee },
  { id: "eggs", name: "Crate of eggs", price: 62, icon: Egg },
  { id: "credit", name: "Phone credit", price: 10, icon: Smartphone },
];
const byId = Object.fromEntries(ITEMS.map((i) => [i.id, i]));
const cedi = (n: number) =>
  `₵${n.toLocaleString("en-GH", {
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  })}`;

type Sale = { n: number; summary: string; total: number; synced: boolean };
type State = {
  online: boolean;
  cart: Record<string, number>;
  sales: Sale[];
  next: number;
  note: string;
};
type Action =
  | { t: "add"; id: string }
  | { t: "clear" }
  | { t: "charge" }
  | { t: "net"; online: boolean }
  | { t: "sync" }
  | { t: "reset" };

const initial: State = {
  online: true,
  cart: {},
  sales: [],
  next: 1041,
  note: "Tap items to build a sale. Try switching the connection off.",
};

const cartTotal = (cart: Record<string, number>) =>
  Object.entries(cart).reduce((s, [id, q]) => s + byId[id].price * q, 0);
const cartCount = (cart: Record<string, number>) =>
  Object.values(cart).reduce((s, q) => s + q, 0);
const pending = (s: State) => s.sales.filter((x) => !x.synced).length;

function reducer(state: State, a: Action): State {
  switch (a.t) {
    case "add": {
      const cart = { ...state.cart, [a.id]: (state.cart[a.id] ?? 0) + 1 };
      return { ...state, cart, note: `Added ${byId[a.id].name.toLowerCase()}.` };
    }
    case "clear":
      return { ...state, cart: {}, note: "Sale cleared." };
    case "charge": {
      if (!cartCount(state.cart)) return state;
      const summary = Object.entries(state.cart)
        .map(([id, q]) => `${q} × ${byId[id].name.toLowerCase()}`)
        .join(", ");
      const sale: Sale = {
        n: state.next,
        summary,
        total: cartTotal(state.cart),
        synced: state.online,
      };
      return {
        ...state,
        cart: {},
        next: state.next + 1,
        sales: [sale, ...state.sales].slice(0, 6),
        note: state.online
          ? "Sale recorded."
          : "Sale saved on this phone. It will sync when you are back online.",
      };
    }
    case "net": {
      if (a.online === state.online) return state;
      if (!a.online)
        return {
          ...state,
          online: false,
          note: "No connection. You can keep selling.",
        };
      const n = pending(state);
      return {
        ...state,
        online: true,
        note: n ? `Back online. Syncing ${n} sale${n > 1 ? "s" : ""}.` : "Back online.",
      };
    }
    case "sync": {
      const i = [...state.sales].reverse().findIndex((s) => !s.synced);
      if (i === -1) return state;
      const idx = state.sales.length - 1 - i;
      const sales = state.sales.map((s, k) => (k === idx ? { ...s, synced: true } : s));
      const left = sales.filter((s) => !s.synced).length;
      return { ...state, sales, note: left ? state.note : "All sales synced. Nothing lost." };
    }
    case "reset":
      return initial;
  }
}

export function PosDemo() {
  const [s, dispatch] = useReducer(reducer, initial);
  const timers = useRef<number[]>([]);
  const touched = useRef(false);

  const stopAuto = () => {
    touched.current = true;
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
  };

  // Sync queued sales one by one once the connection is back.
  useEffect(() => {
    if (!s.online || pending(s) === 0) return;
    const id = window.setTimeout(() => dispatch({ t: "sync" }), 650);
    return () => window.clearTimeout(id);
  }, [s]);

  // A short scripted run that shows the idea once, until the visitor takes over.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const step = (ms: number, a: Action) =>
      timers.current.push(
        window.setTimeout(() => !touched.current && dispatch(a), ms),
      );
    step(1500, { t: "add", id: "bread" });
    step(2100, { t: "add", id: "water" });
    step(2600, { t: "add", id: "water" });
    step(3700, { t: "net", online: false });
    step(4800, { t: "charge" });
    step(5700, { t: "add", id: "shea" });
    step(6200, { t: "add", id: "milo" });
    step(7300, { t: "charge" });
    step(9400, { t: "net", online: true });
    const list = timers.current;
    return () => list.forEach(window.clearTimeout);
  }, []);

  const total = cartTotal(s.cart);
  const count = cartCount(s.cart);
  const waiting = pending(s);

  return (
    <div
      className="flex flex-col items-center"
      onPointerDownCapture={stopAuto}
      onKeyDownCapture={stopAuto}
      onFocusCapture={stopAuto}
    >
      <div className="phone" role="group" aria-label="Interactive preview of Silentech Commerce on a phone">
        <div className="phone-screen">
          {/* header */}
          <div className="flex items-center justify-between gap-2 px-4 pb-3">
            <div className="min-w-0">
              <p className="truncate font-display text-[0.95rem] font-semibold leading-tight tracking-tight">
                Adwoa&rsquo;s Provisions
              </p>
              <p className="text-[0.7rem] leading-tight text-slate">Tamale &middot; Till 1</p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={s.online}
              aria-label="Connection"
              onClick={() => dispatch({ t: "net", online: !s.online })}
              className={`flex shrink-0 items-center gap-1.5 rounded-full py-1 pl-2.5 pr-1 text-[0.72rem] font-semibold transition-colors ${
                s.online ? "bg-[#E3F6EC] text-[#0B7A4B]" : "bg-[#FDF0D2] text-[#8A5A00]"
              }`}
            >
              <span aria-hidden="true">{s.online ? "Online" : "Offline"}</span>
              <span
                aria-hidden="true"
                className={`relative h-[18px] w-[32px] rounded-full transition-colors ${
                  s.online ? "bg-[#12A66B]" : "bg-[#C98A0B]"
                }`}
              >
                <span
                  className={`absolute top-[2px] h-[14px] w-[14px] rounded-full bg-white transition-all duration-200 ${
                    s.online ? "left-[16px]" : "left-[2px]"
                  }`}
                />
              </span>
            </button>
          </div>

          {/* items */}
          <div className="grid grid-cols-3 gap-1.5 px-3">
            {ITEMS.map((item) => {
              const q = s.cart[item.id] ?? 0;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => dispatch({ t: "add", id: item.id })}
                  className="tile relative flex h-[70px] flex-col items-start justify-between rounded-xl bg-[#F3F4F9] p-2 text-left hover:bg-[#E7E9F2]"
                  aria-label={`Add ${item.name}, ${cedi(item.price)}`}
                >
                  <Icon size={15} strokeWidth={1.9} aria-hidden="true" className="text-indigo" />
                  <span className="block text-[0.68rem] font-medium leading-tight">{item.name}</span>
                  <span className="font-mono text-[0.66rem] text-slate">{cedi(item.price)}</span>
                  {q > 0 && (
                    <span key={q} className="pop absolute right-1.5 top-1.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-ink px-1 font-mono text-[0.62rem] text-white">
                      {q}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* charge */}
          <div className="mt-2.5 flex items-center gap-2 px-3">
            <button
              type="button"
              onClick={() => dispatch({ t: "charge" })}
              disabled={!count}
              className="tile flex h-12 flex-1 items-center justify-between rounded-xl bg-flame px-4 font-display text-[0.95rem] font-semibold text-white transition-opacity disabled:bg-[#D9DBE8] disabled:text-[#7A7F9E]"
            >
              <span>{count ? `Charge` : "Add items"}</span>
              <span className="font-mono text-[0.95rem]">{count ? cedi(total) : ""}</span>
            </button>
            {count > 0 && (
              <button
                type="button"
                onClick={() => dispatch({ t: "clear" })}
                className="h-12 rounded-xl px-3 text-[0.75rem] font-medium text-slate hover:bg-[#F3F4F9]"
              >
                Clear
              </button>
            )}
          </div>

          {/* ledger */}
          <div className="mt-3 border-t border-[#E7E9F2] px-4 pb-1 pt-2.5">
            <div className="flex items-center justify-between">
              <p className="text-[0.7rem] font-semibold text-slate">Today&rsquo;s sales</p>
              {waiting > 0 ? (
                <p className="pop flex items-center gap-1 text-[0.68rem] font-semibold text-[#8A5A00]">
                  <RefreshCw size={11} aria-hidden="true" /> {waiting} waiting to sync
                </p>
              ) : (
                s.sales.length > 0 && (
                  <p className="flex items-center gap-1 text-[0.68rem] font-semibold text-[#0B7A4B]">
                    <Check size={12} aria-hidden="true" /> Up to date
                  </p>
                )
              )}
            </div>
            <ul className="mt-1.5 h-[132px] space-y-1 overflow-hidden" aria-label="Recent sales">
              {s.sales.length === 0 && (
                <li className="pt-6 text-center text-[0.72rem] text-slate">No sales yet.</li>
              )}
              {s.sales.slice(0, 3).map((sale) => (
                <li
                  key={sale.n}
                  className="slide-in flex items-center justify-between gap-2 rounded-lg bg-[#F8F9FC] px-2.5 py-2"
                >
                  <div className="min-w-0">
                    <p className="truncate text-[0.72rem] font-medium leading-tight">
                      #{sale.n} <span className="text-slate">&middot; {sale.summary}</span>
                    </p>
                    <p
                      className={`mt-0.5 flex items-center gap-1 text-[0.65rem] font-medium ${
                        sale.synced ? "text-[#0B7A4B]" : "text-[#8A5A00]"
                      }`}
                    >
                      {sale.synced ? (
                        <>
                          <Check size={10} aria-hidden="true" /> Synced
                        </>
                      ) : (
                        "Saved on this phone"
                      )}
                    </p>
                  </div>
                  <span className="font-mono text-[0.78rem] font-medium">{cedi(sale.total)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-3" />
        </div>
      </div>

      <p className="mt-6 max-w-[318px] text-center text-sm text-chalk/80" role="status" aria-live="polite">
        {s.note}
      </p>
      <div className="mt-2 flex items-center gap-3 text-xs text-chalk/55">
        <span>Interactive preview. Sample shop, not live data.</span>
        <button type="button" className="link text-chalk/80" onClick={() => { stopAuto(); dispatch({ t: "reset" }); }}>
          Reset
        </button>
      </div>
    </div>
  );
}
