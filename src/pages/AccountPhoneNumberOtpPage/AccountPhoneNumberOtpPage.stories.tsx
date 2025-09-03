import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { reactRouterParameters } from "storybook-addon-remix-react-router";

import AccountPhoneNumberOtpPage from "./AccountPhoneNumberOtpPage";

const meta: Meta<typeof AccountPhoneNumberOtpPage> = {
  component: AccountPhoneNumberOtpPage,
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        state: {
          phoneNumber: "09012345678",
        },
      },
    }),
  },
} satisfies Meta<typeof AccountPhoneNumberOtpPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const header = await canvas.findByText(/SMS認証/i);
    expect(header).toBeInTheDocument();

    const phoneNumber = await canvas.findByText(/09012345678/i);
    expect(phoneNumber).toBeInTheDocument();

    const description1 =
      await canvas.findByText(/の電話番号にSMSコードを送信しました/i);
    expect(description1).toBeInTheDocument();

    const description2 =
      await canvas.findByText(/6桁の認証コードを入力してください/i);
    expect(description2).toBeInTheDocument();

    const inputs = await canvas.findAllByRole("textbox");
    expect(inputs).toHaveLength(6);

    const resendButton = await canvas.findByRole("button", { name: /再送信/i });
    expect(resendButton).toBeInTheDocument();

    const submitButton = await canvas.findByRole("button", { name: /次へ/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  },
};

export const Action: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = await canvas.findAllByRole("textbox");
    expect(inputs).toHaveLength(6);
    for (let i = 0; i < inputs.length; i += 1) {
      await userEvent.type(inputs[i], "1");
    }

    const submitButton = await canvas.findByRole("button", { name: /次へ/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeEnabled();

    await userEvent.click(submitButton);
  },
};
