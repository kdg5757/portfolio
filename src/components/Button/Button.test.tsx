import { composeStories } from "@storybook/react";

import { renderRawComponent } from "~/utils/test";

import * as stories from "./Button.stories";

const { Primary, Dashed, Text } = composeStories(stories);

describe("storybook UT", () => {
  test("Primary", async () => {
    await Primary.load();
    const { container } = renderRawComponent(<Primary />);
    await Primary.play!({ canvasElement: container });
  });

  test("Dashed", async () => {
    await Dashed.load();
    const { container } = renderRawComponent(<Dashed />);
    await Dashed.play!({ canvasElement: container });
  });

  test("Text", async () => {
    await Text.load();
    const { container } = renderRawComponent(<Text />);
    await Text.play!({ canvasElement: container });
  });
});
