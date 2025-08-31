import { http, HttpHandler, HttpResponse } from "msw";

import { ColumnResponse } from "~/models";

type MockApis = {
  fetchColumnPosts: HttpHandler;
};

export const columnMockApi: MockApis = {
  fetchColumnPosts: http.post(`/fetch-column-posts`, () => {
    const response: ColumnResponse = {
      paging: {
        currentPage: 1,
        totalPage: 2,
      },
      data: [],
    };

    return HttpResponse.json(response, { status: 200 });
  }),
};
