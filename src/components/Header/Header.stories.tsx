import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import Header from "./Header";

const meta: Meta<typeof Header> = {
  component: Header,
  args: {
    children: "タイトル",
    left: "<",
    right: ">",
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const children = await canvas.findByText(/タイトル/i);
    expect(children).toBeInTheDocument();

    const left = await canvas.findByText(/</i);
    expect(left).toBeInTheDocument();

    const right = await canvas.findByText(/>/i);
    expect(right).toBeInTheDocument();
  },
};

export const NoLeft: Story = {
  args: {
    left: undefined,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const children = await canvas.findByText(/タイトル/i);
    expect(children).toBeInTheDocument();

    const left = canvas.queryByText(/</i);
    expect(left).not.toBeInTheDocument();

    const right = await canvas.findByText(/>/i);
    expect(right).toBeInTheDocument();
  },
};

export const NoRight: Story = {
  args: {
    right: undefined,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const children = await canvas.findByText(/タイトル/i);
    expect(children).toBeInTheDocument();

    const left = await canvas.findByText(/</i);
    expect(left).toBeInTheDocument();

    const right = canvas.queryByText(/>/i);
    expect(right).not.toBeInTheDocument();
  },
};

export const NoBoth: Story = {
  args: {
    left: undefined,
    right: undefined,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const children = await canvas.findByText(/タイトル/i);
    expect(children).toBeInTheDocument();

    const left = canvas.queryByText(/</i);
    expect(left).not.toBeInTheDocument();

    const right = canvas.queryByText(/>/i);
    expect(right).not.toBeInTheDocument();
  },
};

export const NoAll: Story = {
  args: {
    children: undefined,
    left: undefined,
    right: undefined,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const children = canvas.queryByText(/タイトル/i);
    expect(children).not.toBeInTheDocument();

    const left = canvas.queryByText(/</i);
    expect(left).not.toBeInTheDocument();

    const right = canvas.queryByText(/>/i);
    expect(right).not.toBeInTheDocument();
  },
};
