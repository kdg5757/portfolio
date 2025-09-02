import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

import ResendButton from "./ResendButton";

const meta: Meta<typeof ResendButton> = {
  component: ResendButton,
  args: {
    limit: 5,
    onClick: fn(),
  },
} satisfies Meta<typeof ResendButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const resend = await canvas.findByText(/再送信/i);
    expect(resend).toBeInTheDocument();
  },
};

export const Action: Story = {
  play: async ({ canvasElement, args: { onClick } }) => {
    const canvas = within(canvasElement);
    const resend = await canvas.findByText(/再送信/i);
    expect(resend).toBeInTheDocument();
    await userEvent.click(resend);
    expect(onClick).toHaveBeenCalled();

    const disabled = await canvas.findByText(/秒後に再送信可能/i);
    expect(disabled).toBeInTheDocument();
  },
};
