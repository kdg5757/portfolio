import axios, { CreateAxiosDefaults } from "axios";

import { authEndpoints } from "./authApi";
import { columnEndpoints } from "./columnApi";

const defaultClientConfig: CreateAxiosDefaults = {
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
};

export const ENV_DOMAIN = import.meta.env.VITE_ENVIRONMENTAL_DOMAIN ?? "";

export const authClient = axios.create({
  ...defaultClientConfig,
  baseURL: ENV_DOMAIN,
});

export const columnClient = axios.create({
  ...defaultClientConfig,
  baseURL: ENV_DOMAIN,
});

export const authApi = authEndpoints(authClient);
export const columnApi = columnEndpoints(columnClient);
