import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import AboutSection from "./AboutSection";

const meta: Meta<typeof AboutSection> = {
  component: AboutSection,
} satisfies Meta<typeof AboutSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
