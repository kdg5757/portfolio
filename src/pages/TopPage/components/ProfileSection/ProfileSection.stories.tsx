import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import ProfileSection from "./ProfileSection";

const meta: Meta<typeof ProfileSection> = {
  component: ProfileSection,
} satisfies Meta<typeof ProfileSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
