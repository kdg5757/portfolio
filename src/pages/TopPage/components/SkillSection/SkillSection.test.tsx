import { composeStories } from "@storybook/react";

import { renderRawComponent } from "~/utils/test";

import * as stories from "./SkillSection.stories";

const { Primary } = composeStories(stories);

describe("storybook UT", () => {
  test("Primary", async () => {
    await Primary.load();
    const { container } = renderRawComponent(<Primary />);
    await Primary.play!({ canvasElement: container });
  });
});
