import React from "react";
import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont as loadDisplay } from "@remotion/google-fonts/BricolageGrotesque";
import { loadFont as loadBody } from "@remotion/google-fonts/InstrumentSans";

const display = loadDisplay().fontFamily;
const body = loadBody().fontFamily;

const INK = "#10122B";
const INDIGO = "#1E2468";
const CHALK = "#F3F4F9";
const FLAME = "#F45132";
const SHEA = "#F4C04A";
const GREEN = "#12A66B";

// Scene lengths in frames (30 fps)
const S1 = 100;
const S2 = 190;
const S3 = 100;
const S4 = 130;
const S5 = 80;
const OVERLAP = 10;
export const DURATION = S1 + S2 + S3 + S4 + S5 - OVERLAP * 4;

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

/** Scene wrapper: fades in and out over OVERLAP frames. */
const Scene: React.FC<{ length: number; children: React.ReactNode }> = ({ length, children }) => {
  const f = useCurrentFrame();
  const opacity = interpolate(f, [0, OVERLAP, length - OVERLAP, length], [0, 1, 1, 0], clamp);
  return <AbsoluteFill style={{ opacity }}>{children}</AbsoluteFill>;
};

const Cloth: React.FC<{ dark?: boolean }> = ({ dark = true }) => (
  <AbsoluteFill
    style={{
      backgroundColor: dark ? INDIGO : CHALK,
      backgroundImage: dark
        ? `repeating-linear-gradient(90deg, transparent 0 46px, rgba(243,244,249,.1) 46px 48px, transparent 48px 94px, rgba(244,81,50,.5) 94px 96px, transparent 96px 142px, rgba(244,192,74,.35) 142px 143px), repeating-linear-gradient(90deg, rgba(255,255,255,.04) 0 94px, transparent 94px 188px), linear-gradient(180deg, rgba(255,255,255,.05), rgba(0,0,0,.25))`
        : undefined,
    }}
  />
);

const Stripe: React.FC<{ bottom?: number }> = ({ bottom = 0 }) => (
  <div
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      bottom,
      height: 18,
      background: `repeating-linear-gradient(90deg, ${CHALK} 0 22px, ${INDIGO} 22px 25px, ${CHALK} 25px 47px, ${FLAME} 47px 50px, ${CHALK} 50px 72px, ${INDIGO} 72px 74px, ${CHALK} 74px 96px, ${SHEA} 96px 98px)`,
    }}
  />
);

const Wordmark: React.FC<{ color?: string }> = ({ color = "#fff" }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 16, fontFamily: display, fontWeight: 600, fontSize: 44, letterSpacing: "-0.04em", color }}>
    <Img src={staticFile("icon.svg")} style={{ width: 52, height: 52 }} />
    <span>
      silentech<span style={{ color: FLAME }}>.</span>
    </span>
  </div>
);

const Rise: React.FC<{ delay?: number; children: React.ReactNode; style?: React.CSSProperties }> = ({ delay = 0, children, style }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: f - delay, fps, config: { damping: 200 } });
  return (
    <div style={{ opacity: p, transform: `translateY(${(1 - p) * 36}px)`, ...style }}>{children}</div>
  );
};

const Caption: React.FC<{ text: string; sub?: string; delay?: number; bottom?: number; left?: number }> = ({ text, sub, delay = 0, bottom = 52, left }) => (
  <Rise delay={delay} style={{ position: "absolute", left: 0, right: 0, bottom, display: "flex", justifyContent: left !== undefined ? "flex-start" : "center", paddingLeft: left ?? 0 }}>
    <div style={{ background: INK, color: "#fff", padding: "20px 38px", borderRadius: 999, display: "flex", alignItems: "baseline", gap: 18, boxShadow: "0 20px 40px -18px rgba(0,0,0,.5)" }}>
      <span style={{ fontFamily: display, fontWeight: 700, fontSize: 40, letterSpacing: "-0.03em" }}>{text}</span>
      {sub && <span style={{ fontFamily: body, fontSize: 28, color: "rgba(255,255,255,.7)" }}>{sub}</span>}
    </div>
  </Rise>
);

/* ---------- Scene 1: title ---------- */
const Title: React.FC = () => (
  <Scene length={S1}>
    <Cloth />
    <div style={{ position: "absolute", left: 120, top: 100 }}>
      <Wordmark />
    </div>
    <div style={{ position: "absolute", left: 120, right: 120, top: 330 }}>
      {["Your shop,", "in one screen."].map((line, i) => (
        <Rise key={line} delay={6 + i * 8}>
          <div style={{ fontFamily: display, fontWeight: 700, fontSize: 170, lineHeight: 0.98, letterSpacing: "-0.05em", color: "#fff", fontVariationSettings: '"wdth" 92' }}>
            {line}
          </div>
        </Rise>
      ))}
      <Rise delay={30}>
        <div style={{ marginTop: 40, fontFamily: body, fontSize: 40, color: "rgba(243,244,249,.8)" }}>
          Silentech Commerce: sales, stock and records, online or offline.
        </div>
      </Rise>
    </div>
    <Stripe />
  </Scene>
);

/* ---------- Browser frame around a screenshot ---------- */
const FRAME_W = 1480;
const IMG_H = (FRAME_W * 822) / 1456;
const BAR = 48;
const FRAME_LEFT = (1920 - FRAME_W) / 2;
const FRAME_TOP = 64;
const px = (x: number) => (x / 100) * FRAME_W;
const py = (y: number) => (y / 100) * IMG_H;

const Browser: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div style={{ position: "absolute", left: FRAME_LEFT, top: FRAME_TOP, width: FRAME_W, borderRadius: 22, overflow: "hidden", background: "#fff", boxShadow: "0 60px 100px -40px rgba(0,0,0,.55), 0 0 0 1px rgba(16,18,43,.1)", ...style }}>
    <div style={{ height: BAR, background: "#E7E9F2", display: "flex", alignItems: "center", gap: 14, padding: "0 20px" }}>
      {[0, 1, 2].map((i) => (
        <div key={i} style={{ width: 13, height: 13, borderRadius: 99, background: "rgba(16,18,43,.2)" }} />
      ))}
      <div style={{ background: "#fff", borderRadius: 8, padding: "3px 16px", fontFamily: "monospace", fontSize: 18, color: "#555A7A" }}>app.silentech.live/sell</div>
    </div>
    <div style={{ position: "relative", width: FRAME_W, height: IMG_H }}>{children}</div>
  </div>
);

const Cursor: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <svg viewBox="0 0 24 24" style={{ position: "absolute", left: px(x) - 4, top: py(y) - 4, width: 46, height: 46, filter: "drop-shadow(0 6px 8px rgba(0,0,0,.4))" }}>
    <path d="M3 2l7.5 19 2.7-7.8L21 10.5z" fill={INK} stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

const Ripple: React.FC<{ x: number; y: number; at: number }> = ({ x, y, at }) => {
  const f = useCurrentFrame();
  const t = (f - at) / 18;
  if (t < 0 || t > 1) return null;
  return (
    <div style={{ position: "absolute", left: px(x) - 50, top: py(y) - 50, width: 100, height: 100, borderRadius: 99, border: `6px solid ${FLAME}`, transform: `scale(${0.3 + t})`, opacity: 1 - t }} />
  );
};

/* ---------- Scene 2: tap, add ---------- */
const A = { x: 45.9, y: 36.5 };
const B = { x: 33.4, y: 36.5 };
const START = { x: 92, y: 80 };

const Sell: React.FC = () => {
  const f = useCurrentFrame();
  const move = (from: typeof A, to: typeof A, a: number, b: number) => ({
    x: interpolate(f, [a, b], [from.x, to.x], { ...clamp, easing: (t) => t * t * (3 - 2 * t) }),
    y: interpolate(f, [a, b], [from.y, to.y], { ...clamp, easing: (t) => t * t * (3 - 2 * t) }),
  });
  const p1 = move(START, A, 14, 44);
  const p2 = move(A, B, 62, 88);
  const p3 = move(B, { x: 90, y: 70 }, 140, 170);
  const pos = f < 62 ? p1 : f < 140 ? p2 : p3;
  const filled = interpolate(f, [100, 114], [0, 1], clamp);
  const scale = interpolate(f, [0, S2], [1, 1.035], clamp);
  const calloutIn = interpolate(f, [118, 134], [0, 1], clamp);
  return (
    <Scene length={S2}>
      <Cloth />
      <Browser style={{ transform: `scale(${scale})`, transformOrigin: "50% 40%" }}>
        <Img src={staticFile("commerce-sell.webp")} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
        <Img src={staticFile("commerce-sell-cart.webp")} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: filled }} />
        <Ripple x={A.x} y={A.y} at={52} />
        <Ripple x={B.x} y={B.y} at={96} />
        <Cursor x={pos.x} y={pos.y} />
        <div style={{ position: "absolute", right: 28, top: py(50), width: 330, opacity: calloutIn, transform: `translateX(${(1 - calloutIn) * 30}px)` }}>
          <div style={{ background: FLAME, color: "#fff", borderRadius: 18, padding: "16px 20px", fontFamily: display, fontWeight: 600, fontSize: 28, lineHeight: 1.1, letterSpacing: "-0.02em", boxShadow: "0 18px 30px -14px rgba(244,81,50,.7)" }}>
            The cart and total update as you tap.
          </div>
        </div>
      </Browser>
      <Caption text="Tap a product to add it." sub="Every item, one screen." delay={10} />
    </Scene>
  );
};

/* ---------- Scene 3: charge ---------- */
const Charge: React.FC = () => {
  const f = useCurrentFrame();
  const zoom = interpolate(f, [0, 34], [1, 1.5], { ...clamp, easing: (t) => 1 - Math.pow(1 - t, 3) });
  const pulse = 0.5 + 0.5 * Math.sin(f / 5);
  const ringOpacity = interpolate(f, [30, 44], [0, 1], clamp);
  return (
    <Scene length={S3}>
      <Cloth />
      <Browser style={{ transform: `scale(${zoom})`, transformOrigin: "86% 100%" }}>
        <Img src={staticFile("commerce-sell-cart.webp")} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
        <div style={{ position: "absolute", left: px(78.8), top: py(90.6), width: px(20.4), height: py(9.4), borderRadius: 18, border: `5px solid ${SHEA}`, opacity: ringOpacity * (0.6 + 0.4 * pulse), boxShadow: `0 0 ${20 + pulse * 24}px ${SHEA}` }} />
      </Browser>
      <Caption text="One tap to charge." sub="Subtotal, discount and total, right there." delay={14} left={90} />
    </Scene>
  );
};

/* ---------- Scene 4: offline phone ---------- */
const Phone: React.FC = () => {
  const f = useCurrentFrame();
  const offline = f >= 24 && f < 84;
  const sale1 = f >= 44;
  const sale2 = f >= 62;
  const synced1 = f >= 90;
  const synced2 = f >= 100;
  const waiting = (sale1 && !synced1 ? 1 : 0) + (sale2 && !synced2 ? 1 : 0);
  const Chip = (
    <div style={{ display: "flex", alignItems: "center", gap: 10, background: offline ? "#FDF0D2" : "#E3F6EC", color: offline ? "#8A5A00" : "#0B7A4B", borderRadius: 99, padding: "5px 5px 5px 12px", fontWeight: 600, fontSize: 20 }}>
      {offline ? "Offline" : "Online"}
      <span style={{ position: "relative", width: 56, height: 32, borderRadius: 99, background: offline ? "#C98A0B" : GREEN }}>
        <span style={{ position: "absolute", top: 4, left: offline ? 4 : 28, width: 24, height: 24, borderRadius: 99, background: "#fff" }} />
      </span>
    </div>
  );
  const Row = ({ n, text, total, synced }: { n: number; text: string; total: string; synced: boolean }) => (
    <div style={{ background: "#F8F9FC", borderRadius: 16, padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <div style={{ fontSize: 24, fontWeight: 600 }}>#{n}{" "}<span style={{ color: "#555A7A", fontWeight: 400 }}>· {text}</span></div>
        <div style={{ fontSize: 20, fontWeight: 600, marginTop: 4, color: synced ? "#0B7A4B" : "#8A5A00" }}>{synced ? "Synced" : "Saved on this phone"}</div>
      </div>
      <div style={{ fontFamily: "monospace", fontSize: 26 }}>{total}</div>
    </div>
  );
  return (
    <div style={{ width: 470, borderRadius: 74, padding: 14, background: "#0a0c1d", boxShadow: "0 0 0 2px #2a2f55, 0 80px 120px -40px rgba(0,0,0,.7)" }}>
      <div style={{ background: "#fff", color: INK, borderRadius: 62, padding: "70px 28px 30px", fontFamily: body, minHeight: 560 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: display, fontWeight: 600, fontSize: 25, whiteSpace: "nowrap", letterSpacing: "-0.02em" }}>Adwoa&rsquo;s Provisions</div>
            <div style={{ fontSize: 20, color: "#555A7A" }}>Tamale · Till 1</div>
          </div>
          {Chip}
        </div>
        <div style={{ marginTop: 34, display: "flex", justifyContent: "space-between", fontSize: 22, fontWeight: 600, color: "#555A7A" }}>
          <span>Today&rsquo;s sales</span>
          <span style={{ color: waiting ? "#8A5A00" : "#0B7A4B" }}>{waiting ? `${waiting} waiting to sync` : sale1 ? "Up to date" : ""}</span>
        </div>
        <div style={{ marginTop: 14, display: "grid", gap: 12 }}>
          {sale2 && <Row n={1042} text="1 × shea butter" total="₵25" synced={synced2} />}
          {sale1 && <Row n={1041} text="2 × bread" total="₵24" synced={synced1} />}
        </div>
      </div>
    </div>
  );
};

const Offline: React.FC = () => {
  const f = useCurrentFrame();
  const lines = f < 84 ? ["The connection drops.", "Selling doesn't."] : ["Back online.", "Everything syncs."];
  return (
    <Scene length={S4}>
      <Cloth />
      <div style={{ position: "absolute", left: 140, top: 270, width: 900 }}>
        <Rise delay={4}>
          <div key={lines[0]} style={{ fontFamily: display, fontWeight: 700, fontSize: 118, lineHeight: 1, letterSpacing: "-0.05em", color: "#fff", fontVariationSettings: '"wdth" 92' }}>
            {lines[0]}
            <br />
            <span style={{ color: SHEA }}>{lines[1]}</span>
          </div>
        </Rise>
        <Rise delay={24}>
          <div style={{ marginTop: 36, fontFamily: body, fontSize: 36, color: "rgba(243,244,249,.8)", maxWidth: 780 }}>
            Record sales offline. Commerce saves them on the phone and syncs when the network returns.
          </div>
        </Rise>
      </div>
      <Rise delay={8} style={{ position: "absolute", right: 200, top: 230 }}>
        <Phone />
      </Rise>
      <div style={{ position: "absolute", right: 200, bottom: 120, width: 470, textAlign: "center", fontFamily: body, fontSize: 20, color: "rgba(243,244,249,.6)" }}>
        Illustration with sample shop data
      </div>
    </Scene>
  );
};

/* ---------- Scene 5: end card ---------- */
const End: React.FC = () => (
  <Scene length={S5}>
    <Cloth />
    <div style={{ position: "absolute", left: 120, top: 120 }}>
      <Wordmark />
    </div>
    <div style={{ position: "absolute", left: 120, right: 120, top: 360 }}>
      <Rise delay={4}>
        <div style={{ fontFamily: display, fontWeight: 700, fontSize: 150, lineHeight: 1, letterSpacing: "-0.05em", color: "#fff", fontVariationSettings: '"wdth" 92' }}>
          Silentech Commerce.
        </div>
      </Rise>
      <Rise delay={14}>
        <div style={{ marginTop: 34, fontFamily: body, fontSize: 42, color: "rgba(243,244,249,.85)" }}>
          Point of sale, stock, expenses and customer credit.
        </div>
      </Rise>
      <Rise delay={24}>
        <div style={{ marginTop: 56, display: "inline-block", background: FLAME, color: "#fff", fontFamily: display, fontWeight: 600, fontSize: 46, padding: "22px 48px", borderRadius: 999, letterSpacing: "-0.01em" }}>
          app.silentech.live
        </div>
      </Rise>
    </div>
    <Stripe />
  </Scene>
);

export const CommerceTour: React.FC = () => {
  const starts = [0, S1 - OVERLAP, S1 + S2 - 2 * OVERLAP, S1 + S2 + S3 - 3 * OVERLAP, S1 + S2 + S3 + S4 - 4 * OVERLAP];
  const scenes = [Title, Sell, Charge, Offline, End];
  const lens = [S1, S2, S3, S4, S5];
  return (
    <AbsoluteFill style={{ background: INK }}>
      {scenes.map((C, i) => (
        <Sequence key={i} from={starts[i]} durationInFrames={lens[i]}>
          <C />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
