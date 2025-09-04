import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

import ErrorPopup from "./ErrorPopup";

const meta: Meta<typeof ErrorPopup> = {
  component: ErrorPopup,
  args: {
    isOpen: true,
    title: "タイトル",
    message: "メッセージ",
    onClose: fn(),
  },
} satisfies Meta<typeof ErrorPopup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement, args: { title, message } }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const titleComponent = await canvas.findByText(title);
    expect(titleComponent).toBeInTheDocument();

    const messageComponent = await canvas.findByText(message);
    expect(messageComponent).toBeInTheDocument();

    const closeButton = await canvas.findByRole("button", { name: /閉じる/i });
    expect(closeButton).toBeInTheDocument();
  },
};

export const Close: Story = {
  args: {
    isOpen: false,
  },
  play: async ({ canvasElement, args: { title, message } }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const titleComponent = canvas.queryByText(title);
    expect(titleComponent).not.toBeInTheDocument();

    const messageComponent = canvas.queryByText(message);
    expect(messageComponent).not.toBeInTheDocument();

    const closeButton = canvas.queryByRole("button", { name: /閉じる/i });
    expect(closeButton).not.toBeInTheDocument();
  },
};

export const Action: Story = {
  play: async ({ canvasElement, args: { title, message, onClose } }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const titleComponent = await canvas.findByText(title);
    expect(titleComponent).toBeInTheDocument();

    const messageComponent = await canvas.findByText(message);
    expect(messageComponent).toBeInTheDocument();

    const closeButton = await canvas.findByRole("button", { name: /閉じる/i });
    expect(closeButton).toBeInTheDocument();
    await userEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  },
};
