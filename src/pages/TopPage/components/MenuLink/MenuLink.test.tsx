import { composeStories } from "@storybook/react";

import { renderRawComponent } from "~/utils/test";

import * as stories from "./MenuLink.stories";

const { Link, Button } = composeStories(stories);

describe("storybook UT", () => {
  test("Link", async () => {
    await Link.load();
    const { container } = renderRawComponent(<Link />);
    await Link.play!({ canvasElement: container });
  });

  test("Button", async () => {
    await Button.load();
    const { container } = renderRawComponent(<Button />);
    await Button.play!({ canvasElement: container });
  });
});
