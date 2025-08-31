import { Suspense, useEffect, useMemo, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  QueryErrorResetBoundary,
  useIsFetching,
  useIsMutating,
} from "react-query";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import ErrorPage from "./pages/ErrorPage";
import { PageRouter } from "./router";

function App() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const [isOffline, setIsOffline] = useState(false);
  const isLoading = useMemo(
    () => isFetching > 0 || isMutating > 0,
    [isFetching, isMutating],
  );

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
            <Spin indicator={<LoadingOutlined />} spinning={isLoading}>
              <PageRouter />
            </Spin>
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

export default App;
