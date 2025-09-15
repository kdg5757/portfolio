import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import TopPage from "./TopPage";

const meta: Meta<typeof TopPage> = {
  component: TopPage,
} satisfies Meta<typeof TopPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const mainTitle = canvas.getByText(/TopPage/i);
    expect(mainTitle).toBeInTheDocument();
  },
};
