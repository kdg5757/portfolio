export type CheckPhoneNumberRequest = {
  phoneNumber: string;
};

export type ConfirmRequest = {
  code: string;
};

export type TokensType = {
  idToken: string;
  accessToken: string;
  refreshToken: string;
};
