import { composeStories } from "@storybook/react";

import { renderRawComponent } from "~/utils/test";

import { mockedNavigator } from "../../../vitest.setup";
import * as stories from "./BackButton.stories";

const { Primary, To, OnClick } = composeStories(stories);

describe("storybook UT", () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
  });

  test("Primary", async () => {
    await Primary.load();
    const { container } = renderRawComponent(<Primary />);
    await Primary.play!({ canvasElement: container });

    expect(mockedNavigator).toHaveBeenCalledWith(-1);
  });

  test("To", async () => {
    await To.load();
    const { container } = renderRawComponent(<To />);
    await To.play!({ canvasElement: container });

    expect(mockedNavigator).toHaveBeenCalledWith("/test");
  });

  test("OnClick", async () => {
    await OnClick.load();
    const { container } = renderRawComponent(<OnClick />);
    await OnClick.play!({ canvasElement: container });
  });
});
