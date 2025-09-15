/* eslint-disable sonarjs/no-duplicate-string */
import { http, HttpHandler, HttpResponse, PathParams } from "msw";

import {
  CheckPhoneNumberRequest,
  ConfirmRequest,
  LoginRequest,
  TokensType,
} from "~/models";

type MockApis = {
  checkNumber: HttpHandler;
  login: HttpHandler;
  signUp: HttpHandler;
  confirmSignUp: HttpHandler;
  confirmLogin: HttpHandler;
};

export const authMockApi: MockApis = {
  checkNumber: http.get(`/check-phone-number`, () =>
    HttpResponse.json(null, { status: 204 }),
  ),
  login: http.post(`/login`, () => HttpResponse.json(null, { status: 204 })),
  signUp: http.post(`/sign-up`, () => HttpResponse.json(null, { status: 204 })),
  confirmSignUp: http.post(`/confirm-sign-up`, () => {
    // TODO: 任意のデータをjwtエンコードして返すようにする
    const response: TokensType = {
      idToken: "idToken",
      accessToken: "accessToken",
      refreshToken: "refreshToken",
    };
    return HttpResponse.json(response, { status: 200 });
  }),
  confirmLogin: http.post(`/confirm-login`, () => {
    // TODO: 任意のデータをjwtエンコードして返すようにする
    const response: TokensType = {
      idToken: "idToken",
      accessToken: "accessToken",
      refreshToken: "refreshToken",
    };
    return HttpResponse.json(response, { status: 200 });
  }),
};

type CustomMockApis = {
  checkNumber: HttpHandler;
  login: HttpHandler;
};

export const authCustomMockApi: CustomMockApis = {
  checkNumber: http.get(`/check-phone-number`, () =>
    HttpResponse.json(null, { status: 401 }),
  ),
  login: http.post<PathParams, LoginRequest>(`/login`, async () =>
    HttpResponse.json(
      {
        title: "パスワードが違います",
        message: "再度ご確認の上お試しください",
      },
      { status: 400 },
    ),
  ),
};

// NOTE: --mode mockで実行されるモックAPI
type SampleMockApis = {
  checkNumber: HttpHandler;
  login: HttpHandler;
  signUp: HttpHandler;
  confirmSignUp: HttpHandler;
  confirmLogin: HttpHandler;
};

export const authSampleMockApi: SampleMockApis = {
  checkNumber: http.get<PathParams, CheckPhoneNumberRequest>(
    `/check-phone-number`,
    ({ request }) => {
      const url = new URL(request.url);
      const phoneNumber = url.searchParams.get("phoneNumber");

      if (phoneNumber && /^080+?/.test(phoneNumber)) {
        return HttpResponse.json(null, { status: 400 });
      }

      return HttpResponse.json(null, { status: 204 });
    },
  ),
  login: http.post<PathParams, LoginRequest>(`/login`, async ({ request }) => {
    const { password } = await request.json();

    if (password === "aaaa1111") {
      return HttpResponse.json(
        {
          title: "パスワードが違います",
          message: "再度ご確認の上お試しください",
        },
        { status: 400 },
      );
    }

    return HttpResponse.json(null, { status: 204 });
  }),
  signUp: http.post(`/sign-up`, () => HttpResponse.json(null, { status: 204 })),
  confirmSignUp: http.post<PathParams, ConfirmRequest>(
    `/confirm-sign-up`,
    async ({ request }) => {
      const { code } = await request.json();
      if (code === "888888") {
        return HttpResponse.json(
          {
            title: "コードが間違っているます",
            message: "再度ご確認の上お試しください",
          },
          { status: 400 },
        );
      }

      if (code === "999999") {
        return HttpResponse.json(
          {
            title: "アカウント作成に失敗しました",
            message: "再度ご確認の上お試しください",
          },
          { status: 400 },
        );
      }

      // TODO: 任意のデータをjwtエンコードして返すようにする
      const response: TokensType = {
        idToken: "idToken",
        accessToken: "accessToken",
        refreshToken: "refreshToken",
      };
      return HttpResponse.json(response, { status: 200 });
    },
  ),
  confirmLogin: http.post<PathParams, ConfirmRequest>(
    `/confirm-login`,
    async ({ request }) => {
      const { code } = await request.json();
      if (code === "888888") {
        return HttpResponse.json(
          {
            title: "コードが間違っているます",
            message: "再度ご確認の上お試しください",
          },
          { status: 400 },
        );
      }

      if (code === "999999") {
        return HttpResponse.json(
          {
            title: "ログインに失敗しました",
            message: "再度ご確認の上お試しください",
          },
          { status: 400 },
        );
      }

      // TODO: 任意のデータをjwtエンコードして返すようにする
      const response: TokensType = {
        idToken: "idToken",
        accessToken: "accessToken",
        refreshToken: "refreshToken",
      };
      return HttpResponse.json(response, { status: 200 });
    },
  ),
};
