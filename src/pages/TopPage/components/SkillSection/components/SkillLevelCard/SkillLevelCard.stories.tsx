import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import SkillLevelCard from "./SkillLevelCard";

const meta: Meta<typeof SkillLevelCard> = {
  component: SkillLevelCard,
  args: {
    title: "Javascript",
    percent: 50,
  },
} satisfies Meta<typeof SkillLevelCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement, args: { title, percent } }) => {
    const canvas = within(canvasElement);
    const titleElement = canvas.getByText(title);
    expect(titleElement).toBeInTheDocument();

    const percentElement = canvas.getByText(`${percent}%`);
    expect(percentElement).toBeInTheDocument();
  },
};
