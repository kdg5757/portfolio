import { AxiosInstance, AxiosResponse } from "axios";

import { CheckPhoneNumberRequest, ConfirmRequest, TokensType } from "~/models";

type Return = {
  checkPhoneNumber: (
    params: CheckPhoneNumberRequest,
  ) => Promise<AxiosResponse<void>>;
  confirmSignUp: (params: ConfirmRequest) => Promise<AxiosResponse<TokensType>>;
};

export const authEndpoints = (client: AxiosInstance): Return => ({
  checkPhoneNumber: (
    params: CheckPhoneNumberRequest,
  ): Promise<AxiosResponse<void>> => {
    const path = `/check-phone-number`;
    return client.get(path, { params });
  },
  confirmSignUp: (
    postData: ConfirmRequest,
  ): Promise<AxiosResponse<TokensType>> => {
    const path = `/confirm-sign-up`;
    return client.post(path, postData);
  },
});
