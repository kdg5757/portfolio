import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    type: "primary",
    children: "テスト",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button", { name: /テスト/i });
    expect(button).toBeInTheDocument();
  },
};

export const Dashed: Story = {
  args: {
    ...meta.args,
    type: "dashed",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button", { name: /テスト/i });
    expect(button).toBeInTheDocument();
  },
};

export const Text: Story = {
  args: {
    ...meta.args,
    type: "text",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button", { name: /テスト/i });
    expect(button).toBeInTheDocument();
  },
};
