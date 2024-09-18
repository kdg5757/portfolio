import type { Preview, StoryFn } from "@storybook/react";
import {initialize, mswLoader} from 'msw-storybook-addon'
import React from "react";
import {storybookHandlers} from "../src/__mocks__/handlers"

const BaseDecorator = (Story: StoryFn) => {
  return <Story />
}

initialize({
  onUnhandledRequest: "bypass"
})

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
      }
    }
  },
  decorators: [BaseDecorator],
  loaders: [mswLoader]
};

export default preview;
