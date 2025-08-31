import { RequestHandler } from "msw";

import { testMockApi } from "./api/testMockApi";

export const handlers: RequestHandler[] = [...Object.values(testMockApi)];

export const storybookHandlers = {
  ...testMockApi,
};
