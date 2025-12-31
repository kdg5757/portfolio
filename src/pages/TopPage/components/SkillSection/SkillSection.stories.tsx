import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import { skillLevelCardDataList } from "./constants";
import SkillSection from "./SkillSection";

const meta: Meta<typeof SkillSection> = {
  component: SkillSection,
} satisfies Meta<typeof SkillSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sectionTitle = canvas.getByText(/Skill/i);
    expect(sectionTitle).toBeInTheDocument();

    for (const skill of skillLevelCardDataList) {
      const skillCard = canvas.getByText(skill.title);
      expect(skillCard).toBeInTheDocument();
    }
  },
};
