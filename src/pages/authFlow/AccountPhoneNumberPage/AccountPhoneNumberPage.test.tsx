import { composeStories } from "@storybook/react";
import { screen, userEvent } from "@storybook/test";

import { authCustomMockApi } from "~/__mocks__/api/authApi";
import { mockServer } from "~/__mocks__/server";
import { ROUTES } from "~/router";
import { renderRawComponent } from "~/utils/test";

import { mockedNavigator } from "../../../../vitest.setup";
import * as stories from "./AccountPhoneNumberPage.stories";

const { Primary, Action, EntryAction } = composeStories(stories);

describe("storybook UT", () => {
  beforeEach(() => {
    mockedNavigator.mockClear();
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
      `/${ROUTES.ACCOUNT_PASSWORD_PAGE}`,
      {
        state: { phoneNumber: "09012345678" },
      },
    );
  });

  test("EntryAction", async () => {
    mockServer.use(authCustomMockApi.checkNumber);
    await EntryAction.load();
    const { container } = renderRawComponent(<EntryAction />);
    await EntryAction.play!({ canvasElement: container });

    expect(mockedNavigator).toHaveBeenCalledWith(
      `/${ROUTES.ACCOUNT_PASSWORD_PAGE}`,
      {
        state: { phoneNumber: "09012345678", isEntry: true },
      },
    );
  });

  test("BackButton", async () => {
    await Primary.load();
    const { container } = renderRawComponent(<Primary />);
    await Primary.play!({ canvasElement: container });

    const backButton = await screen.findByTestId(/back-button/i);
    await userEvent.click(backButton);
    expect(mockedNavigator).toHaveBeenCalledWith(-1);
  });
});
