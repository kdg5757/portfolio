import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { authApi } from "~/apis";
import { CheckPhoneNumberRequest, ConfirmRequest, TokensType } from "~/models";

type UseCheckPhoneNumberMutation = UseMutationResult<
  AxiosResponse<void>,
  AxiosError<void>,
  CheckPhoneNumberRequest,
  unknown
>;

export const useCheckPhoneNumberMutation = (): UseCheckPhoneNumberMutation =>
  useMutation({
    mutationFn: authApi.checkPhoneNumber,
  });

type UseConfirmSignUpMutation = UseMutationResult<
  AxiosResponse<TokensType>,
  AxiosError<void>,
  ConfirmRequest,
  unknown
>;

export const useConfirmSignUpMutation = (): UseConfirmSignUpMutation =>
  useMutation({
    mutationFn: authApi.confirmSignUp,
  });
