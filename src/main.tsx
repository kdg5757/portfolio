import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const setup = async (): Promise<void> => {
  if (import.meta.env.DEV) {
    const { mockWorker } = await import("./__mocks__/worker.ts");
    mockWorker.start({
      onUnhandledRequest: "bypass",
    });
  }
};

setup().then(() =>
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  ),
);
