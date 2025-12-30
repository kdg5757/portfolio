import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

import BackButton from "./BackButton";

const meta: Meta<typeof BackButton> = {
  component: BackButton,
} satisfies Meta<typeof BackButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const leftIcon = await canvas.findByTestId(/left-icon/i);
    expect(leftIcon).toBeInTheDocument();
    await userEvent.click(leftIcon);
  },
};

export const To: Story = {
  args: {
    to: "/test",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const leftIcon = await canvas.findByTestId(/left-icon/i);
    expect(leftIcon).toBeInTheDocument();
    await userEvent.click(leftIcon);
  },
};

export const OnClick: Story = {
  args: {
    onClick: fn(),
  },
  play: async ({ canvasElement, args: { onClick } }) => {
    const canvas = within(canvasElement);
    const leftIcon = await canvas.findByTestId(/left-icon/i);
    expect(leftIcon).toBeInTheDocument();
    await userEvent.click(leftIcon);
    expect(onClick).toHaveBeenCalled();
  },
};
