import { AxiosResponse } from "axios";
import { API_PATHS } from "~/constants/apiPaths";
import apiClient from "~/http/axiosClient";
import { ResponseBody } from "~/models";
import { CheckNumberRequest } from "~/models";

export default {
  checkNumber: (
    params: CheckNumberRequest,
  ): Promise<AxiosResponse<ResponseBody<boolean>>> => {
    return apiClient.post(API_PATHS.checkNumber, params);
  },
};
