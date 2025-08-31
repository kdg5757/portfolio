import { composeStories } from "@storybook/react";

import { renderTestComponent } from "~/utils/test";

import * as stories from "./Layout.stories";

const { Primary } = composeStories(stories);

describe("storybook UT", () => {
  test("Primary", async () => {
    await Primary.load();

    const { container } = renderTestComponent(<Primary />);

    await Primary.play!({ canvasElement: container });
  });
});
