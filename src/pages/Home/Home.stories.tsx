import type { Meta, StoryObj } from "@storybook/react";
import Home from "./Home";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { testMockApi } from "~/__mocks__/api/testMockApi";

const meta: Meta<typeof Home> = {
  component: Home,
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const mainTitle = canvas.getByText(/Home/i);
    expect(mainTitle).toBeInTheDocument();
  },
};

export const Action: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const mainTitle = canvas.getByText(/Home/i);
    expect(mainTitle).toBeInTheDocument();

    const input = canvas.getByPlaceholderText(/番号を入力/i);
    expect(input).toBeInTheDocument();
    expect(input).toBeEnabled();

    const button = canvas.getByRole("button", { name: "確認" });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();

    await userEvent.type(input, "1");
    await waitFor(() => {
      expect(button).toBeEnabled();
    });

    await userEvent.click(button);
    await waitFor(() => {
      const errorMessage = canvas.queryByText(/※正しい番号を入力してください/i);
      expect(errorMessage).not.toBeInTheDocument();
    });
  },
};

export const ErrorAction: Story = {
  parameters: {
    msw: {
      handlers: {
        checkNumber: testMockApi.checkNumberError,
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const mainTitle = canvas.getByText(/Home/i);
    expect(mainTitle).toBeInTheDocument();

    const input = canvas.getByPlaceholderText(/番号を入力/i);
    expect(input).toBeInTheDocument();
    expect(input).toBeEnabled();

    const button = canvas.getByRole("button", { name: "確認" });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();

    await userEvent.type(input, "1");
    await waitFor(() => {
      expect(button).toBeEnabled();
    });

    await userEvent.click(button);
    await waitFor(() => {
      const errorMessage = canvas.getByText(/※正しい番号を入力してください/i);
      expect(errorMessage).toBeInTheDocument();
    });
  },
};
