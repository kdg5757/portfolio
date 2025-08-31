import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Provider as JotaiProvider } from "jotai";
import { ThemeProvider } from "@emotion/react";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./pages/ErrorPage";
import { Suspense, useEffect, useState } from "react";

function App() {
  const [isOffline, setIsOffline] = useState(false);
  const browserRouter = createBrowserRouter(router);

  const queryCache = new QueryCache({});

  const mutationCache = new MutationCache({});

  const queryClient = new QueryClient({
    queryCache,
    mutationCache,
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  useEffect(() => {
    window.addEventListener("offline", () => {
      setIsOffline(true);
    });

    window.addEventListener("online", () => {
      setIsOffline(false);
    });

    return () => {
      window.removeEventListener("offline", () => {
        setIsOffline(true);
      });

      window.removeEventListener("online", () => {
        setIsOffline(false);
      });
    };
  }, []);

  return (
    <JotaiProvider>
      <ThemeProvider theme={{}}>
        <QueryClientProvider client={queryClient}>
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary onReset={reset} fallback={<ErrorPage />}>
                <Suspense fallback={<div>Loading...</div>}>
                  {/* TODO: あとでポップアップ修正する */}
                  {isOffline && (
                    <div
                      style={{
                        textAlign: "center",
                        backgroundColor: "#ffcc00",
                        padding: "8px",
                      }}
                    >
                      オフラインです。通信環境をご確認ください。
                    </div>
                  )}
                  <RouterProvider router={browserRouter} />
                </Suspense>
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </QueryClientProvider>
      </ThemeProvider>
    </JotaiProvider>
  );
}

export default App;
