import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

import MenuLink from "./MenuLink";

const meta: Meta<typeof MenuLink> = {
  component: MenuLink,
} satisfies Meta<typeof MenuLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Link: Story = {
  args: {
    name: "テスト",
    to: "#aa",
  },
  play: async ({ canvasElement, args: { name, to } }) => {
    const canvas = within(canvasElement);
    const link = await canvas.findByText(name);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", to);
  },
};

export const Button: Story = {
  args: {
    name: "テスト",
    to: undefined,
    onClick: fn(),
  },
  play: async ({ canvasElement, args: { name, onClick } }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByText(name);
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  },
};
