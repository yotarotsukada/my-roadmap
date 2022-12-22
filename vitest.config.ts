/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import Vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  define: {
    'import.meta.vitest': 'undefined',
  },
  plugins: [
    Vue(),
    AutoImport({
      imports: ['vitest'],
      dts: 'src/generated/auto-imports.d.ts',
    }),
  ],
  test: {
    includeSource: ['src/**/*.{js,ts}'],
    environment: 'jsdom',
  },
});
