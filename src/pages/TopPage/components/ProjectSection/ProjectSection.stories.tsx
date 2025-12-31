import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import { projectCards } from "./constants";
import ProjectSection from "./ProjectSection";

const meta: Meta<typeof ProjectSection> = {
  component: ProjectSection,
} satisfies Meta<typeof ProjectSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sectionTitle = canvas.getByText(/Project/i);
    expect(sectionTitle).toBeInTheDocument();

    for (const card of projectCards) {
      const cardTitle = canvas.getByText(card.title);
      expect(cardTitle).toBeInTheDocument();
    }
  },
};
