import { RequestHandler } from "msw";

import { authMockApi, authSampleMockApi } from "./api/authApi";
import { columnMockApi } from "./api/columnApi";

export const handlers: RequestHandler[] = [
  ...Object.values(authMockApi),
  ...Object.values(columnMockApi),
];

export const sampleHandlers: RequestHandler[] = [
  ...Object.values(authSampleMockApi),
  ...Object.values(columnMockApi),
];

export const storybookHandlers = {
  ...authMockApi,
  ...columnMockApi,
};
