import { http, HttpHandler, HttpResponse } from "msw";
import { API_PATHS } from "~/constants/apiPaths";
import { ResponseBody } from "~/models";

type MockApis = {
  checkNumber: HttpHandler;
};

export const testMockApi: MockApis = {
  checkNumber: http.post(API_PATHS.checkNumber, () => {
    const response: ResponseBody<boolean> = {
      code: "0000",
      data: true,
      msg: "",
    };

    return HttpResponse.json(response, { status: 200 });
  }),
};

type MockCustomApis = {
  checkNumberError: HttpHandler;
};

export const testMockCustomApi: MockCustomApis = {
  checkNumberError: http.post(API_PATHS.checkNumber, () => {
    const response: ResponseBody<boolean> = {
      code: "1000",
      data: false,
      msg: "",
    };

    return HttpResponse.json(response, { status: 200 });
  }),
};
