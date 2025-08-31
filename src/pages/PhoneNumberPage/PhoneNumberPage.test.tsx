import { composeStories } from "@storybook/react";

import { ROUTES } from "~/router";
import { renderTestComponent } from "~/utils/test";

import { mockedNavigator } from "../../../vitest.setup";
import * as stories from "./PhoneNumberPage.stories";

const { Primary, Action } = composeStories(stories);

describe("storybook UT", () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
  });
  test("Primary", async () => {
    await Primary.load();
    const { container } = renderTestComponent(<Primary />);
    await Primary.play!({ canvasElement: container });
  });

  test("Action", async () => {
    await Action.load();
    const { container } = renderTestComponent(<Action />);
    await Action.play!({ canvasElement: container });

    expect(mockedNavigator).toHaveBeenCalledWith(
      `/${ROUTES.PASSWORD_INPUT_PAGE}`,
      {
        state: { phoneNumber: "09012345678" },
      },
    );
  });
});
