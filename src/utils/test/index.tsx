import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {
  queries,
  render as renderRawComponent,
  RenderResult,
} from "@testing-library/react";
import { isAxiosError } from "axios";
import { Provider as JotaiProvider } from "jotai";

type TestProps = {
  children: ReactNode;
};

export const TestProvider: React.FC<TestProps> = ({ children }) => {
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
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>{children}</MemoryRouter>
      </QueryClientProvider>
    </JotaiProvider>
  );
};

const renderTestComponent = (
  component: React.ReactElement,
): RenderResult<typeof queries, HTMLElement, HTMLElement> =>
  renderRawComponent(component, {
    wrapper: TestProvider,
  });

export { renderRawComponent, renderTestComponent };
