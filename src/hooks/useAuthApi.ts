import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { authApi } from "~/apis";
import {
  CheckPhoneNumberRequest,
  ConfirmRequest,
  LoginRequest,
  SignUpRequest,
  TokensType,
} from "~/models";

type UseCheckPhoneNumberMutation = UseMutationResult<
  AxiosResponse<void>,
  AxiosError<void>,
  CheckPhoneNumberRequest,
  unknown
>;

export const useCheckPhoneNumberMutation = (): UseCheckPhoneNumberMutation =>
  useMutation({
    mutationFn: authApi.checkPhoneNumber,
    throwOnError: false,
  });

type UseLoginMutation = UseMutationResult<
  AxiosResponse<void>,
  AxiosError<void>,
  LoginRequest,
  unknown
>;

export const useLoginMutation = (): UseLoginMutation =>
  useMutation({
    mutationFn: authApi.login,
  });

type UseSignUpMutation = UseMutationResult<
  AxiosResponse<void>,
  AxiosError<void>,
  SignUpRequest,
  unknown
>;

export const useSignUpMutation = (): UseSignUpMutation =>
  useMutation({
    mutationFn: authApi.signUp,
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
