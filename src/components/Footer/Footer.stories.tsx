import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import Footer from "./Footer";

const meta: Meta<typeof Footer> = {
  component: Footer,
  render: (args) => (
    <div style={{ height: "200svh" }}>
      <Footer {...args} />
    </div>
  ),
  args: {
    children: "コンテンツ",
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const children = await canvas.findByText(/コンテンツ/i);
    expect(children).toBeInTheDocument();
  },
};
