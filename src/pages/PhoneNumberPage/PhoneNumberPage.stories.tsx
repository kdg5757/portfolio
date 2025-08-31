import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

import PhoneNumberPage from "./PhoneNumberPage";

const meta: Meta<typeof PhoneNumberPage> = {
  component: PhoneNumberPage,
  render: (args) => (
    <div style={{ height: "100vh" }}>
      <PhoneNumberPage {...args} />
    </div>
  ),
} satisfies Meta<typeof PhoneNumberPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const labels = await canvas.findAllByText(/電話番号入力/i);
    expect(labels).toHaveLength(2);

    const phoneNumberInput = await canvas.findByLabelText(/電話番号入力/);
    expect(phoneNumberInput).toBeInTheDocument();

    const nextButton = await canvas.findByRole("button", { name: /次へ/ });
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toBeDisabled();
  },
};

export const Action: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const labels = await canvas.findAllByText(/電話番号入力/i);
    expect(labels).toHaveLength(2);

    const phoneNumberInput = await canvas.findByLabelText(/電話番号入力/);
    expect(phoneNumberInput).toBeInTheDocument();

    const nextButton = await canvas.findByRole("button", { name: /次へ/ });
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toBeDisabled();

    await userEvent.type(phoneNumberInput, "09012345678");
    expect(phoneNumberInput).toHaveValue("09012345678");
    expect(nextButton).toBeEnabled();

    await userEvent.click(nextButton);
  },
};
