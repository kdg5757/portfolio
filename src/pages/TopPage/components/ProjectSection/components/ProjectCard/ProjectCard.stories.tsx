import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import mockImage from "~/assets/images/mock-image.jpeg";

import ProjectCard from "./ProjectCard";

const meta: Meta<typeof ProjectCard> = {
  component: ProjectCard,
  args: {
    image: mockImage,
    title: "大規模ECプラットフォーム",
    field: "フロントエンド",
    description:
      "月間100万PVの企業ECサイトの新機能開発を担当。ユーザー認証システム、決済フロー、在庫管理システムの設計・実装を行いました。",
    technologies: ["React", "TypeScript", "Node.js"],
    features: ["ユーザー認証", "決済処理", "在庫管理"],
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({
    canvasElement,
    args: { title, field, description, technologies, features },
  }) => {
    const canvas = within(canvasElement);
    const titleElement = canvas.getByText(title);
    expect(titleElement).toBeInTheDocument();

    const fieldElement = canvas.getByText(field);
    expect(fieldElement).toBeInTheDocument();

    const descriptionElement = canvas.getByText(description);
    expect(descriptionElement).toBeInTheDocument();

    for (const technology of technologies) {
      const technologyElement = canvas.getByText(technology);
      expect(technologyElement).toBeInTheDocument();
    }

    for (const feature of features) {
      const featureElement = canvas.getByText(feature);
      expect(featureElement).toBeInTheDocument();
    }
  },
};
