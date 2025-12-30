import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import { ConfigProvider } from "antd";
import { ThemeProvider } from "@emotion/react";
import {
  MutationCache,
  MutationOptions,
  QueryCache,
  QueryClient,
  QueryClientProvider,
  QueryOptions,
} from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { Provider as JotaiProvider } from "jotai";

import App from "./App.tsx";
import ErrorPopup from "./components/ErrorPopup";
import { CommonErrorResponse } from "./models/ResponseBody.ts";
import { antdTheme, theme } from "./utils";
import { EmotionJSX } from "node_modules/@emotion/react/dist/declarations/src/jsx-namespace";

const setup = async (): Promise<void> => {
  if (import.meta.env.DEV) {
    const { mockWorker } = await import("./__mocks__/worker.ts");
    mockWorker.start({
      onUnhandledRequest: "bypass",
    });
  }
};

function Wrapper(): EmotionJSX.Element {
  const [error, setError] = useState<CommonErrorResponse | undefined>(
    undefined,
  );

  const closeErrorPopup = (): void => setError(undefined);

  const queryCache = new QueryCache({
    onError: (error, query): void => {
      if (!isAxiosError(error)) {
        return;
      }

      const queryOptions = query.options as QueryOptions & {
        throwOnError?: boolean;
      };
      if (queryOptions?.throwOnError === false) {
        return;
      }

      const errorData = error?.response?.data as CommonErrorResponse;
      setError(errorData);
    },
  });

  const mutationCache = new MutationCache({
    onError: (error, variables, _, mutation): void => {
      if (!isAxiosError(error)) {
        return;
      }

      const mutationOptions = mutation.options as MutationOptions & {
        throwOnError?: boolean;
      };
      if (mutationOptions?.throwOnError === false) {
        return;
      }

      console.error("Global query variables:", variables);
      console.error("Global query error:", error);
      const errorData = error?.response?.data as CommonErrorResponse;
      setError(errorData);
    },
  });

  const queryClient = new QueryClient({
    queryCache,
    mutationCache,
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <JotaiProvider>
      <ThemeProvider theme={theme}>
        <ConfigProvider theme={antdTheme}>
          <QueryClientProvider client={queryClient}>
            <App />
            <ErrorPopup
              isOpen={!!error}
              title={error?.title}
              message={error?.message}
              onClose={closeErrorPopup}
            />
          </QueryClientProvider>
        </ConfigProvider>
      </ThemeProvider>
    </JotaiProvider>
  );
}

setup().then(() =>
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Wrapper />
    </StrictMode>,
  ),
);
