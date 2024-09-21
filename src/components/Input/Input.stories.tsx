import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import { expect, fn, userEvent, within } from "@storybook/test";

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    className: "test",
    placeholder: "placeholder",
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement, args: { className } }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass(className!);
    expect(input).toBeEnabled();
  },
};

export const Disabled: Story = {
  args: {
    ...meta.args,
    isDisabled: true,
  },
  play: async ({ canvasElement, args: { className } }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass(className!);
    expect(input).toBeDisabled();
  },
};

export const Action: Story = {
  play: async ({
    canvasElement,
    args: { className, onChange, onFocus, onBlur },
  }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass(className!);
    expect(input).toBeEnabled();
    await userEvent.tab();
    await expect(onFocus).toHaveBeenCalledTimes(1);
    await userEvent.tab();
    expect(onBlur).toHaveBeenCalledTimes(1);
    await userEvent.type(input, "a");
    expect(onChange).toHaveBeenCalled();
  },
};
