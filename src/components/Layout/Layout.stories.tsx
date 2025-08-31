import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import Layout from "./Layout";

const meta: Meta<typeof Layout> = {
  component: Layout,
  args: {
    children: "コンテンツ",
  },
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const children = await canvas.findByText(/コンテンツ/i);
    expect(children).toBeInTheDocument();
  },
};
