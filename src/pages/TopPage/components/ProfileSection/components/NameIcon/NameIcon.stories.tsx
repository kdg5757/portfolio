import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import NameIcon from "./NameIcon";

const meta: Meta<typeof NameIcon> = {
  component: NameIcon,
  args: {
    name: "金",
  },
} satisfies Meta<typeof NameIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement, args: { name } }) => {
    const canvas = within(canvasElement);

    const nameIcon = await canvas.findByText(name);
    expect(nameIcon).toBeInTheDocument();
  },
};
