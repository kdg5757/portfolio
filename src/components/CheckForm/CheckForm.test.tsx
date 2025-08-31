import { composeStories } from "@storybook/react";

import * as stories from "./CheckForm.stories";
import { renderTestComponent } from "~/utils/test";

const { Primary, Action } = composeStories(stories);

describe("storybook UT", () => {
  test("Primary", async () => {
    await Primary.load();

    const { container } = renderTestComponent(<Primary />);

    await Primary.play!({ canvasElement: container });
  });

  test("Action", async () => {
    await Action.load();

    const { container } = renderTestComponent(<Action />);

    await Action.play!({ canvasElement: container });
  });
});
