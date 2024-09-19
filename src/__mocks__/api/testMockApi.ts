import { http, HttpHandler, HttpResponse } from "msw";
import { ResponseBody } from "~/models";

type MockApis = {
  getTestData: HttpHandler;
};

export const testMockApi: MockApis = {
  getTestData: http.get("/test/url", () => {
    const response: ResponseBody<string> = {
      code: "0000",
      data: "test",
      msg: "",
    };

    return HttpResponse.json(response, { status: 200 });
  }),
};
