import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import ContactSection from "./ContactSection";

const meta: Meta<typeof ContactSection> = {
  component: ContactSection,
} satisfies Meta<typeof ContactSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
