import { composeStories } from "@storybook/react";

import { renderRawComponent } from "~/utils/test";

import * as stories from "./Header.stories";

const { Primary, NoLeft, NoRight, NoBoth, NoAll } = composeStories(stories);

describe("storybook UT", () => {
  test("Primary", async () => {
    await Primary.load();
    const { container } = renderRawComponent(<Primary />);
    await Primary.play!({ canvasElement: container });
  });

  test("NoLeft", async () => {
    await NoLeft.load();
    const { container } = renderRawComponent(<NoLeft />);
    await NoLeft.play!({ canvasElement: container });
  });

  test("NoRight", async () => {
    await NoRight.load();
    const { container } = renderRawComponent(<NoRight />);
    await NoRight.play!({ canvasElement: container });
  });

  test("NoBoth", async () => {
    await NoBoth.load();
    const { container } = renderRawComponent(<NoBoth />);
    await NoBoth.play!({ canvasElement: container });
  });

  test("NoAll", async () => {
    await NoAll.load();
    const { container } = renderRawComponent(<NoAll />);
    await NoAll.play!({ canvasElement: container });
  });
});
