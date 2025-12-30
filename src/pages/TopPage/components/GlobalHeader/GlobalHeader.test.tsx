import { composeStories } from "@storybook/react";

import { mockMatchMedia, renderRawComponent } from "~/utils/test";

import * as stories from "./GlobalHeader.stories";

const { Primary, Mobile } = composeStories(stories);

describe("storybook UT", () => {
  test("Primary", async () => {
    mockMatchMedia(1024);

    await Primary.load();
    const { container } = renderRawComponent(<Primary />);
    await Primary.play!({ canvasElement: container });
  });

  test("Mobile", async () => {
    mockMatchMedia(500);

    await Mobile.load();
    const { container } = renderRawComponent(<Mobile />);
    await Mobile.play!({ canvasElement: container });
  });
});
