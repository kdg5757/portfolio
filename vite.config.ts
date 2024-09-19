import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    }
  },
  test: {
    testTimeout: 15000,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    include: ["src/**/*.test.{js,ts,jsx,tsx}"],
    globals: true,
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
    coverage: {
      enabled: true,
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['node_modules', 'src/__mocks__/**', 'src/**/*.stories.{js,ts,jsx,tsx}', 'src/**/*.d.ts', 'src/**/index.{js,ts,jsx,tsx}', 'src/constants/**', 'src/store/**', 'src/models/**'],
    },
  },
});
