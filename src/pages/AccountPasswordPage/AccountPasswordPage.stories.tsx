import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { reactRouterParameters } from "storybook-addon-remix-react-router";

import AccountPasswordPage from "./AccountPasswordPage";

const meta: Meta<typeof AccountPasswordPage> = {
  component: AccountPasswordPage,
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        state: {
          phoneNumber: "09012345678",
          isEntry: true,
        },
      },
    }),
  },
} satisfies Meta<typeof AccountPasswordPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Entry: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const headerTitle = await canvas.findByText(/情報入力/i);
    expect(headerTitle).toBeInTheDocument();

    const passwordInput = await canvas.findByLabelText(/パスワード$/);
    expect(passwordInput).toBeInTheDocument();

    const passwordConfirmInput =
      await canvas.findByLabelText(/パスワード（確認）/);
    expect(passwordConfirmInput).toBeInTheDocument();

    const birthDay = await canvas.findByLabelText(/生年月日/i);
    expect(birthDay).toBeInTheDocument();

    const gender = await canvas.findByText(/性別/i);
    expect(gender).toBeInTheDocument();

    const nextButton = await canvas.findByRole("button", { name: /次へ/ });
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toBeDisabled();
  },
};

export const EntryAction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const headerTitle = await canvas.findByText(/情報入力/i);
    expect(headerTitle).toBeInTheDocument();

    const passwordInput = await canvas.findByLabelText(/パスワード$/);
    expect(passwordInput).toBeInTheDocument();
    await userEvent.type(passwordInput, "asdf1234");

    const passwordConfirmInput =
      await canvas.findByLabelText(/パスワード（確認）/);
    expect(passwordConfirmInput).toBeInTheDocument();
    await userEvent.type(passwordConfirmInput, "asdf1234");

    const birthDay = await canvas.findByLabelText(/生年月日/i);
    expect(birthDay).toBeInTheDocument();
    await userEvent.click(birthDay);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const ownerCanvas = within(canvasElement.ownerDocument.body);
    const birthdayConfirmButton = await ownerCanvas.findByRole("button", {
      name: /確認/i,
    });
    expect(birthdayConfirmButton).toBeInTheDocument();
    await userEvent.click(birthdayConfirmButton);

    const gender = await canvas.findByText(/性別/i);
    expect(gender).toBeInTheDocument();

    const male = await canvas.findByLabelText(/男/i);
    expect(male).toBeInTheDocument();
    await userEvent.click(male);

    const nextButton = await canvas.findByRole("button", { name: /次へ/ });
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toBeEnabled();
    await userEvent.click(nextButton);
  },
};

export const Login: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        state: {
          phoneNumber: "09012345678",
          isEntry: false,
        },
      },
    }),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const headerTitle = await canvas.findByText(/パスワード入力/i);
    expect(headerTitle).toBeInTheDocument();

    const passwordInput = await canvas.findByLabelText(/パスワード$/);
    expect(passwordInput).toBeInTheDocument();

    const passwordConfirmInput = canvas.queryByLabelText(/パスワード（確認）/);
    expect(passwordConfirmInput).not.toBeInTheDocument();

    const birthDay = canvas.queryByLabelText(/生年月日/i);
    expect(birthDay).not.toBeInTheDocument();

    const gender = canvas.queryByText(/性別/i);
    expect(gender).not.toBeInTheDocument();

    const nextButton = await canvas.findByRole("button", { name: /次へ/ });
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toBeDisabled();
  },
};

export const LoginAction: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        state: {
          phoneNumber: "09012345678",
          isEntry: false,
        },
      },
    }),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const headerTitle = await canvas.findByText(/パスワード入力/i);
    expect(headerTitle).toBeInTheDocument();

    const passwordInput = await canvas.findByLabelText(/パスワード$/);
    expect(passwordInput).toBeInTheDocument();
    await userEvent.type(passwordInput, "asdf1234");

    const passwordConfirmInput = canvas.queryByLabelText(/パスワード（確認）/);
    expect(passwordConfirmInput).not.toBeInTheDocument();

    const birthDay = canvas.queryByLabelText(/生年月日/i);
    expect(birthDay).not.toBeInTheDocument();

    const gender = canvas.queryByText(/性別/i);
    expect(gender).not.toBeInTheDocument();

    const nextButton = await canvas.findByRole("button", { name: /次へ/ });
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toBeEnabled();
    await userEvent.click(nextButton);
  },
};
