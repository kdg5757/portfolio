import { http, HttpHandler, HttpResponse } from "msw";

import { TokensType } from "~/models";

type MockApis = {
  checkNumber: HttpHandler;
  confirmSignUp: HttpHandler;
};

export const authMockApi: MockApis = {
  checkNumber: http.get(`/check-phone-number`, () =>
    HttpResponse.json(null, { status: 204 }),
  ),
  confirmSignUp: http.post(`/confirm-sign-up`, () => {
    // TODO: 任意のデータをjwtエンコードして返すようにする
    const response: TokensType = {
      idToken: "idToken",
      accessToken: "accessToken",
      refreshToken: "refreshToken",
    };
    return HttpResponse.json(response, { status: 200 });
  }),
};
