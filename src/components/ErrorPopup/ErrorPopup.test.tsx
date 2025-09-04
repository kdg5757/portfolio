import { composeStories } from "@storybook/react";

import { renderRawComponent } from "~/utils/test";

import * as stories from "./ErrorPopup.stories";

const { Primary, Close, Action } = composeStories(stories);

describe("storybook UT", () => {
  test("Primary", async () => {
    await Primary.load();
    const { container } = renderRawComponent(<Primary />);
    await Primary.play!({ canvasElement: container });
  });

  test("Close", async () => {
    await Close.load();
    const { container } = renderRawComponent(<Close />);
    await Close.play!({ canvasElement: container });
  });

  test("Action", async () => {
    await Action.load();
    const { container } = renderRawComponent(<Action />);
    await Action.play!({ canvasElement: container });
  });
});
