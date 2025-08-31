import { AxiosInstance, AxiosResponse } from "axios";

import { ColumnRequest, ColumnResponse } from "~/models";

type Return = {
  fetchColumnPosts: (
    params: ColumnRequest
  ) => Promise<AxiosResponse<ColumnResponse>>;
};

export const columnEndpoints = (client: AxiosInstance): Return => ({
  fetchColumnPosts: (
    params: ColumnRequest
  ): Promise<AxiosResponse<ColumnResponse>> => {
    const path = `/fetch-column-posts`;
    return client.get(path, { params });
  },
});
