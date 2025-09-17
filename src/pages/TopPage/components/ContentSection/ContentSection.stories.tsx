import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import ContentSection from "./ContentSection";

const meta: Meta<typeof ContentSection> = {
  component: ContentSection,
  args: {
    id: "test",
    children: (
      <>
        <div>メニュー1</div>
        <div>メニュー2</div>
      </>
    ),
  },
} satisfies Meta<typeof ContentSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const menu1 = await canvas.findByText(/メニュー1/i);
    expect(menu1).toBeInTheDocument();

    const menu2 = await canvas.findByText(/メニュー2/i);
    expect(menu2).toBeInTheDocument();
  },
};
