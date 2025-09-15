import type { Preview, StoryFn } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import { Provider as JotaiProvider } from "jotai";
import { storybookHandlers } from "../src/__mocks__/handlers";
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
import { antdTheme, theme } from "../src/utils";
import { ConfigProvider } from "antd";
import { withRouter } from "storybook-addon-remix-react-router";

import "../src/App.css";
import { CommonErrorResponse } from "~/models";
import { useState } from "react";
import ErrorPopup from "~/components/ErrorPopup";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
const BaseDecorator = (Story: StoryFn) => {
  return (
    <JotaiProvider>
      <Story />
    </JotaiProvider>
  );
};

const ThemeDecorator = (Story: StoryFn) => (
  <ThemeProvider theme={theme}>
    <ConfigProvider theme={antdTheme}>
      <Story />
    </ConfigProvider>
  </ThemeProvider>
);

const QueryDecorator = (Story: StoryFn) => {
  const [error, setError] = useState<CommonErrorResponse | undefined>(
    undefined
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
    <QueryClientProvider client={queryClient}>
      <Story />
      <ErrorPopup
        isOpen={!!error}
        title={error?.title}
        message={error?.message}
        onClose={closeErrorPopup}
      />
    </QueryClientProvider>
  );
};

initialize({
  onUnhandledRequest: "bypass",
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers: {
        ...storybookHandlers,
      },
    },
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  decorators: [BaseDecorator, ThemeDecorator, QueryDecorator, withRouter],
  loaders: [mswLoader],
};

export default preview;
