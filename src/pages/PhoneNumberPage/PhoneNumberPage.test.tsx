import { composeStories } from "@storybook/react";

import { renderTestComponent } from "~/utils/test";

import * as stories from "./PhoneNumberPage.stories";

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
