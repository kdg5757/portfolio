import { RequestHandler } from "msw";

import { authMockApi } from "./api/authApi";
import { columnMockApi } from "./api/columnApi";

export const handlers: RequestHandler[] = [
  ...Object.values(authMockApi),
  ...Object.values(columnMockApi),
];

export const storybookHandlers = {
  ...authMockApi,
  ...columnMockApi,
};
