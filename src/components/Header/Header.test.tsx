import { composeStories } from "@storybook/react";

import { renderTestComponent } from "~/utils/test";

import * as stories from "./Header.stories";

const { Primary, NoLeft, NoRight, NoBoth, NoAll } = composeStories(stories);

describe("storybook UT", () => {
  test("Primary", async () => {
    await Primary.load();

    const { container } = renderTestComponent(<Primary />);

    await Primary.play!({ canvasElement: container });
  });

  test("NoLeft", async () => {
    await NoLeft.load();

    const { container } = renderTestComponent(<NoLeft />);

    await NoLeft.play!({ canvasElement: container });
  });

  test("NoRight", async () => {
    await NoRight.load();

    const { container } = renderTestComponent(<NoRight />);

    await NoRight.play!({ canvasElement: container });
  });

  test("NoBoth", async () => {
    await NoBoth.load();

    const { container } = renderTestComponent(<NoBoth />);

    await NoBoth.play!({ canvasElement: container });
  });

  test("NoAll", async () => {
    await NoAll.load();

    const { container } = renderTestComponent(<NoAll />);

    await NoAll.play!({ canvasElement: container });
  });
});
