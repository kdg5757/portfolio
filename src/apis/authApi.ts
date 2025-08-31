import { AxiosInstance, AxiosResponse } from "axios";

import { CheckPhoneNumberRequest } from "~/models";

type Return = {
  checkPhoneNumber: (
    params: CheckPhoneNumberRequest
  ) => Promise<AxiosResponse<void>>;
};

export const authEndpoints = (client: AxiosInstance): Return => ({
  checkPhoneNumber: (
    params: CheckPhoneNumberRequest
  ): Promise<AxiosResponse<void>> => {
    const path = `/check-phone-number`;
    return client.get(path, { params });
  },
});
