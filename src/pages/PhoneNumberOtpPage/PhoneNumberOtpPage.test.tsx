import { composeStories } from "@storybook/react";

import { ROUTES } from "~/router";
import { renderRawComponent } from "~/utils/test";

import { mockedNavigator } from "../../../vitest.setup";
import * as stories from "./PhoneNumberOtpPage.stories";

const { Primary, Action } = composeStories(stories);

describe("storybook UT", () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
  });
  test("Primary", async () => {
    await Primary.load();
    const { container } = renderRawComponent(<Primary />);
    await Primary.play!({ canvasElement: container });
  });

  test("Action", async () => {
    await Action.load();
    const { container } = renderRawComponent(<Action />);
    await Action.play!({ canvasElement: container });

    expect(mockedNavigator).toHaveBeenCalledWith(
      `/${ROUTES.AUTH_SUCCESS_PAGE}`,
    );
  });
});
