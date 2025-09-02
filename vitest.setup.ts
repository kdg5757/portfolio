import { setProjectAnnotations } from "@storybook/react";
import { afterAll, afterEach, beforeAll } from "vitest";

import * as globalStorybookConfig from "./.storybook/preview";
import { mockServer } from "./src/__mocks__/server";

// NOTE: プロジェクト全体の Storybook 設定（decorators / parameters など）を登録
// eslint-disable-next-line @typescript-eslint/no-explicit-any
setProjectAnnotations(globalStorybookConfig as any);

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

export const mockedNavigator = vi.fn();
vi.mock("react-router-dom", async () => {
  const reactRouter = await vi.importActual("react-router-dom");
  return {
    ...reactRouter,
    useNavigate: () => mockedNavigator,
  };
});

beforeAll(() => {
  mockServer.listen({
    onUnhandledRequest: "error",
  });
});

afterEach(() => {
  mockServer.resetHandlers();
});

afterAll(() => {
  mockServer.close();
});
