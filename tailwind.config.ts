import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10122B",
        indigo: { DEFAULT: "#1E2468", deep: "#161A4F", soft: "#2A317F" },
        chalk: { DEFAULT: "#F3F4F9", dim: "#E7E9F2" },
        flame: { DEFAULT: "#F45132", ink: "#C23A1E" },
        shea: "#F4C04A",
        slate: "#555A7A",
        commerce: "#12A66B",
        stitch: "#1B6B3A",
        schools: { DEFAULT: "#0E6F73", tint: "#DDF1F1" },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: { wrap: "1320px" },
      letterSpacing: { tightest: "-0.045em" },
    },
  },
  plugins: [],
};
export default config;
