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
    const sectionTitle = canvas.getByText(/About/i);
    expect(sectionTitle).toBeInTheDocument();

    const description1 = canvas.getByText(
      /2015年にコーダーとしてIT業界に入門し、現在はWebアプリケーションをメインで開発をしているフロントエンドエンジニアです。/i,
    );
    expect(description1).toBeInTheDocument();

    const description2 = canvas.getByText(
      /必要によって最新技術を学習しますが、それよりサービスを安定させることや、デザインや機能を正確に実現することが好きです。/i,
    );
    expect(description2).toBeInTheDocument();

    const description3 = canvas.getByText(
      /コーディング以外の時間には、運動や体を使うことをすることで、頭を休ませてよりいいアイデアが出るようにしています。/i,
    );
    expect(description3).toBeInTheDocument();

    const columnTitle = canvas.getByText(/基本情報/i);
    expect(columnTitle).toBeInTheDocument();

    const columnItem1 = canvas.getByText(/10年以上の経験/i);
    expect(columnItem1).toBeInTheDocument();

    const columnItem2 = canvas.getByText(/東京在住/i);
    expect(columnItem2).toBeInTheDocument();

    const columnItem3 = canvas.getByText(/日本永住権所有/i);
    expect(columnItem3).toBeInTheDocument();

    const columnItem4 = canvas.getByText(/運動好き/i);
    expect(columnItem4).toBeInTheDocument();
  },
};
