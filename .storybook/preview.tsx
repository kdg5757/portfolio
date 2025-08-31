import type { Preview, StoryFn } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import { Provider as JotaiProvider } from "jotai";
import { storybookHandlers } from "../src/__mocks__/handlers";
import { ThemeProvider } from "@emotion/react";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { isAxiosError } from "axios";
import { antdTheme, theme } from "../src/utils";
import { ConfigProvider } from "antd";

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
    <QueryClientProvider client={queryClient}>
      <Story />
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
  },
  decorators: [BaseDecorator, ThemeDecorator, QueryDecorator],
  loaders: [mswLoader],
};

export default preview;
