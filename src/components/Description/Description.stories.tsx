import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import Description from "./Description";

const meta: Meta<typeof Description> = {
  component: Description,
  args: {
    children: "説明文",
  },
} satisfies Meta<typeof Description>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement, args: { children } }) => {
    const canvas = within(canvasElement);
    const description = canvas.getByText(children);
    expect(description).toBeInTheDocument();
  },
};
