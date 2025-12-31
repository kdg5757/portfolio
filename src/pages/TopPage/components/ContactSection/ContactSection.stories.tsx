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
    const sectionTitle = canvas.getByText(/Contact/i);
    expect(sectionTitle).toBeInTheDocument();

    const description = canvas.getByText(
      /新しい機会やエキサイティングなプロジェクトに常に興味を持っています。 あなたのアイデアを実現する方法について話し合いましょう。/i,
    );
    expect(description).toBeInTheDocument();

    const email = canvas.getByRole("link", { name: /kdg5757@yahoo\.co\.jp/i });
    expect(email).toBeInTheDocument();
    expect(email).toHaveAttribute(
      "href",
      `mailto:kdg5757@yahoo.co.jp?subject=[PORTFOLIO] お問い合わせ`,
    );

    const github = canvas.getByRole("link", { name: /github/i });
    expect(github).toBeInTheDocument();
    expect(github).toHaveAttribute("href", "https://github.com/kdg5757");
  },
};
