import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// بیلد کتابخانه‌ای: JS به‌صورت ESM + CSS یکپارچه (simorgh-ui.css)
// JSX توسط esbuild از طریق tsconfig (jsx: react-jsx) هندل می‌شود
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: () => 'simorgh-ui.mjs',
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: [/^react/, /^react-dom/, /^@radix-ui\//],
      output: {
        assetFileNames: 'simorgh-ui[extname]',
      },
    },
  },
});
