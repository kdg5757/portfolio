export type CheckPhoneNumberRequest = {
  phoneNumber: string;
};

export type SignUpRequest = CheckPhoneNumberRequest & {
  password: string;
};

export type LoginRequest = SignUpRequest;

export type ConfirmRequest = {
  code: string;
};

export type TokensType = {
  idToken: string;
  accessToken: string;
  refreshToken: string;
};
