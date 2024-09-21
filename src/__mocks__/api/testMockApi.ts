import { http, HttpHandler, HttpResponse } from "msw";
import { API_PATHS } from "~/constants/apiPaths";
import { ResponseBody } from "~/models";

type MockApis = {
  checkNumber: HttpHandler;
  checkNumberError: HttpHandler;
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
  checkNumberError: http.post(API_PATHS.checkNumber, () => {
    const response: ResponseBody<boolean> = {
      code: "1000",
      data: false,
      msg: "",
    };

    return HttpResponse.json(response, { status: 200 });
  }),
};
