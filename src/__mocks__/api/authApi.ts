import { http, HttpHandler, HttpResponse } from "msw";

type MockApis = {
  checkNumber: HttpHandler;
};

export const authMockApi: MockApis = {
  checkNumber: http.get(`/check-phone-number`, () =>
    HttpResponse.json(null, { status: 204 })
  ),
};
