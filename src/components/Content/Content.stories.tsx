import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import Content from "./Content";

const meta: Meta<typeof Content> = {
  component: Content,
  args: {
    children: "コンテンツ",
  },
} satisfies Meta<typeof Content>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const children = await canvas.findByText(/コンテンツ/i);
    expect(children).toBeInTheDocument();
  },
};
