import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import SampleSection from "./SampleSection";

const meta: Meta<typeof SampleSection> = {
  component: SampleSection,
} satisfies Meta<typeof SampleSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sectionTitle = canvas.getByText(/Sample/i);
    expect(sectionTitle).toBeInTheDocument();
  },
};
