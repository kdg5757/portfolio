import type { Meta, StoryObj } from "@storybook/react";
import CheckForm from "./CheckForm";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";

const meta: Meta<typeof CheckForm> = {
  component: CheckForm,
  args: {
    onChecker: fn(),
  },
} satisfies Meta<typeof CheckForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByPlaceholderText(/番号を入力/i);
    expect(input).toBeInTheDocument();
    expect(input).toBeEnabled();

    const button = canvas.getByRole("button", { name: "確認" });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  },
};

export const Action: Story = {
  play: async ({ canvasElement, args: { onChecker } }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByPlaceholderText(/番号を入力/i);
    expect(input).toBeInTheDocument();
    expect(input).toBeEnabled();

    const button = canvas.getByRole("button", { name: "確認" });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();

    await userEvent.type(input, "1");
    await waitFor(() => {
      expect(button).toBeEnabled();
    });

    await userEvent.click(button);
    expect(onChecker).toHaveBeenCalled();
  },
};
