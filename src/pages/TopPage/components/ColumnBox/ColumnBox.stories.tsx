import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import ColumnBox from "./ColumnBox";

const meta: Meta<typeof ColumnBox> = {
  component: ColumnBox,
  args: {
    children: (
      <>
        <p>aaa</p>
        <p>bbb</p>
      </>
    ),
  },
} satisfies Meta<typeof ColumnBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const content1 = canvas.getByText(/aaa/i);
    expect(content1).toBeInTheDocument();

    const content2 = canvas.getByText(/bbb/i);
    expect(content2).toBeInTheDocument();
  },
};
