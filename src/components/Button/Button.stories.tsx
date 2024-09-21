import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: "ボタン",
    className: "test",
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement, args: { children, className } }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole("button", { name: children as string });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(className!);
    expect(button).toBeEnabled();
  },
};

export const Disabled: Story = {
  args: {
    ...meta.args,
    isDisabled: true,
  },
  play: async ({ canvasElement, args: { children, className } }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole("button", { name: children as string });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(className!);
    expect(button).toBeDisabled();
  },
};

export const Action: Story = {
  play: async ({ canvasElement, args: { children, className, onClick } }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole("button", { name: children as string });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(className!);
    expect(button).toBeEnabled();
    await userEvent.click(button);
    await waitFor(() => {
      expect(onClick).toHaveBeenCalled();
    });
  },
};
