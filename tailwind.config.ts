// tailwind.config.ts 수정
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "retro-sand": "#fffdf2",
        "retro-emerald": "#cc5b77",
        "retro-black": "#29565c",
      },
      // 폰트 설정 추가!
      fontFamily: {
        mono: ["Cascadia Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
