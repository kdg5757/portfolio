import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import ProjectSection from "./ProjectSection";

const meta: Meta<typeof ProjectSection> = {
  component: ProjectSection,
} satisfies Meta<typeof ProjectSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
