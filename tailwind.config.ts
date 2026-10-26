import type { Config } from "tailwindcss";

/**
 * Single source of truth for the notebook design system.
 * Typography rules:
 *  - font-hand  (Caveat)          -> section titles and red margin notes only
 *  - font-sans  (Inter)           -> all prose and project copy
 *  - font-mono  (JetBrains Mono)  -> tags, dates, tech labels, system text
 * Use the named text-* tokens below instead of ad-hoc sizes so every route stays consistent.
 * Corners stay sharp: do not use rounded-* utilities except rounded-full for timeline nodes.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.ts"],
  theme: {
    extend: {
      colors: {
        paper: "#f8f6f0",
        card: "#f3efe6",
        ink: "#1c1b19",
        "ink-soft": "#4a4740",
        pen: "#d62828",
        tape: "#e6d9a8",
      },
      fontFamily: {
        hand: ["var(--font-caveat)", "Segoe Print", "cursive"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "hand-note": ["1.375rem", { lineHeight: "1.15", fontWeight: "600" }],
        "hand-heading": ["clamp(2.5rem, 6vw, 3.5rem)", { lineHeight: "1", fontWeight: "700" }],
        "hand-hero": ["clamp(3rem, 9vw, 5.5rem)", { lineHeight: "0.95", fontWeight: "700" }],
        "mono-tag": ["0.75rem", { lineHeight: "1.25", letterSpacing: "0.06em", fontWeight: "500" }],
        title: ["clamp(1.75rem, 4vw, 2.5rem)", { lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.02em" }],
        subtitle: ["1.125rem", { lineHeight: "1.4", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.75", fontWeight: "400" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.6", fontWeight: "400" }],
      },
      boxShadow: {
        crisp: "5px 5px 0 0 #1c1b19",
        "crisp-sm": "3px 3px 0 0 #1c1b19",
      },
    },
  },
};

export default config;
