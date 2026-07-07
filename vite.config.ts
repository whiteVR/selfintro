import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: './' → GitHub Pages 서브경로/Netlify/Vercel 어디에 올려도 asset 경로가 유효
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // three.js 계열은 무거우므로 별도 청크로 분리 (초기 캐싱/로딩 최적화)
          three: ["three", "@react-three/fiber"],
        },
      },
    },
  },
});
