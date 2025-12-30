import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import Title from "./Title";

const meta: Meta<typeof Title> = {
  component: Title,
  args: {
    children: "テスト",
  },
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement, args: { children } }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText(children);
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("H1");
  },
};
