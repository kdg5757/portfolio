import { atom } from "jotai";

import { TokensType } from "~/models";

import { RESET } from "jotai/utils";

const setTokenToApiClient = (token: TokensType): void => {
  // TODO: APIクライアントにトークンをセットする処理
  console.log("Set token to API client:", token);
};

const _userTokenAtom = atom<TokensType | undefined>(undefined);

export const userTokenAtom = atom(
  (get) => {
    const token = get(_userTokenAtom);
    if (token) {
      setTokenToApiClient(token);
    }

    return token;
  },
  (_, set, newToken: TokensType | undefined | typeof RESET) => {
    if (!newToken || newToken === RESET) {
      set(_userTokenAtom, undefined);
      return;
    }

    set(_userTokenAtom, newToken);
    setTokenToApiClient(newToken);
  },
);
