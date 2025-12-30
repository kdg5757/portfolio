import path from "path";

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    testTimeout: 15000,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.{js,ts,jsx,tsx}"],
    globals: true,
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
    coverage: {
      enabled: true,
      provider: "v8",
      reporter: ["text", "json", "html"],
      reportsDirectory: "./coverage",
      include: ["src/**/*.{ts,tsx,js,jsx}"], // ← テストファイルを除く通常コードを対象
      exclude: [
        "node_modules",
        "src/__mocks__/**",
        "src/**/*.stories.{js,ts,jsx,tsx}",
        "src/**/*.test.{js,ts,jsx,tsx}", // テストファイルは除外
        "src/**/*.d.ts",
        "src/**/index.{js,ts,jsx,tsx}",
        "src/constants/**",
        "src/store/**",
        "src/models/**",
        "src/@types/**",
      ],
    },
  },
});
