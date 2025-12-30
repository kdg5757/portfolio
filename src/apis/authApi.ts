import { AxiosInstance, AxiosResponse } from "axios";

import {
  CheckPhoneNumberRequest,
  ConfirmRequest,
  LoginRequest,
  SignUpRequest,
  TokensType,
} from "~/models";

type Return = {
  checkPhoneNumber: (
    params: CheckPhoneNumberRequest,
  ) => Promise<AxiosResponse<void>>;
  login: (params: LoginRequest) => Promise<AxiosResponse<void>>;
  signUp: (params: SignUpRequest) => Promise<AxiosResponse<void>>;
  confirmSignUp: (params: ConfirmRequest) => Promise<AxiosResponse<TokensType>>;
  confirmLogin: (params: ConfirmRequest) => Promise<AxiosResponse<TokensType>>;
};

export const authEndpoints = (client: AxiosInstance): Return => ({
  checkPhoneNumber: (
    params: CheckPhoneNumberRequest,
  ): Promise<AxiosResponse<void>> => {
    const path = `/check-phone-number`;
    return client.get(path, { params });
  },
  login: (postData: LoginRequest): Promise<AxiosResponse<void>> => {
    const path = `/login`;
    return client.post(path, postData);
  },
  signUp: (postData: SignUpRequest): Promise<AxiosResponse<void>> => {
    const path = `/sign-up`;
    return client.post(path, postData);
  },
  confirmSignUp: (
    postData: ConfirmRequest,
  ): Promise<AxiosResponse<TokensType>> => {
    const path = `/confirm-sign-up`;
    return client.post(path, postData);
  },
  confirmLogin: (
    postData: ConfirmRequest,
  ): Promise<AxiosResponse<TokensType>> => {
    const path = `/confirm-login`;
    return client.post(path, postData);
  },
});
