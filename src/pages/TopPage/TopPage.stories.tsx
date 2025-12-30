import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import TopPage from "./TopPage";

const meta: Meta<typeof TopPage> = {
  component: TopPage,
} satisfies Meta<typeof TopPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const nameIcon = await canvas.findByText(/^金$/i);
    expect(nameIcon).toBeInTheDocument();

    const name = await canvas.findByText(/金東建/i);
    expect(name).toBeInTheDocument();

    const description = await canvas.findByText(
      /クライアントの要望を現実に実現したいフロントエンドエンジニアを目指す/i,
    );
    expect(description).toBeInTheDocument();

    const contactButton = await canvas.findByText(/お問い合わせ/i);
    expect(contactButton).toBeInTheDocument();

    const projectButton = await canvas.findByText(/作品を見る/i);
    expect(projectButton).toBeInTheDocument();
  },
};
