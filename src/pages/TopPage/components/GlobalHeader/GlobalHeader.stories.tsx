import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import GlobalHeader from "./GlobalHeader";

const meta: Meta<typeof GlobalHeader> = {
  component: GlobalHeader,
  args: {
    title: "テスト",
    children: (
      <>
        <div>メニュー1</div>
        <div>メニュー2</div>
      </>
    ),
  },
} satisfies Meta<typeof GlobalHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    viewport: { defaultViewport: "tablet" },
  },
  play: async ({ canvasElement, args: { title } }) => {
    const canvas = within(canvasElement);
    const titleComponent = await canvas.findByText(title);
    expect(titleComponent).toBeInTheDocument();

    const menuButton = canvas.queryByTestId(/menu-button/i);
    expect(menuButton).not.toBeInTheDocument();

    const menu1 = await canvas.findByText(/メニュー1/i);
    expect(menu1).toBeInTheDocument();

    const menu2 = await canvas.findByText(/メニュー2/i);
    expect(menu2).toBeInTheDocument();
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
  play: async ({ canvasElement, args: { title } }) => {
    const canvas = within(canvasElement);
    const titleComponent = await canvas.findByText(title);
    expect(titleComponent).toBeInTheDocument();

    const menuButton = await canvas.findByTestId(/menu-button/i);
    expect(menuButton).toBeInTheDocument();

    const menu1 = await canvas.findByText(/メニュー1/i);
    expect(menu1).toBeInTheDocument();

    const menu2 = await canvas.findByText(/メニュー2/i);
    expect(menu2).toBeInTheDocument();
  },
};
