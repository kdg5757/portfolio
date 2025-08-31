import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider as JotaiProvider } from "jotai";
import { ThemeProvider } from "@emotion/react";
import { antdTheme, theme } from "./utils";
import { ConfigProvider } from "antd";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { isAxiosError } from "axios";

const setup = async (): Promise<void> => {
  if (import.meta.env.DEV) {
    const { mockWorker } = await import("./__mocks__/worker.ts");
    mockWorker.start({
      onUnhandledRequest: "bypass",
    });
  }
};

function Wrapper() {
  const queryCache = new QueryCache({
    onError: (error) => {
      if (!isAxiosError(error)) {
        return;
      }
      console.error("Global query error:", error);
    },
  });

  const mutationCache = new MutationCache({
    onError: (error) => {
      if (!isAxiosError(error)) {
        return;
      }
      console.error("Global query error:", error);
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
