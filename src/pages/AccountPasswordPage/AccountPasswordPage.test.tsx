import { composeStories } from "@storybook/react";
import { screen, userEvent } from "@storybook/test";

import { ROUTES } from "~/router";
import { renderRawComponent } from "~/utils/test";

import { mockedNavigator } from "../../../vitest.setup";
import * as stories from "./AccountPasswordPage.stories";

const { Entry, EntryAction, Login, LoginAction } = composeStories(stories);

describe("storybook UT", () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
  });

  test("Entry", async () => {
    await Entry.load();
    const { container } = renderRawComponent(<Entry />);
    await Entry.play!({ canvasElement: container });
  });

  test("EntryAction", async () => {
    await EntryAction.load();
    const { container } = renderRawComponent(<EntryAction />);
    await EntryAction.play!({ canvasElement: container });

    expect(mockedNavigator).toHaveBeenCalledWith(
      `/${ROUTES.ACCOUNT_OTP_PAGE}`,
      {
        state: {
          phoneNumber: "09012345678",
          password: "asdf1234",
          birthday: "1980-01-01",
          gender: "male",
        },
      },
    );
  });

  test("Login", async () => {
    await Login.load();
    const { container } = renderRawComponent(<Login />);
    await Login.play!({ canvasElement: container });
  });

  test("LoginAction", async () => {
    await LoginAction.load();
    const { container } = renderRawComponent(<LoginAction />);
    await LoginAction.play!({ canvasElement: container });

    expect(mockedNavigator).toHaveBeenCalledWith(
      `/${ROUTES.ACCOUNT_OTP_PAGE}`,
      {
        state: {
          phoneNumber: "09012345678",
          password: "asdf1234",
        },
      },
    );
  });

  test("BackButton", async () => {
    await Entry.load();
    const { container } = renderRawComponent(<Entry />);
    await Entry.play!({ canvasElement: container });

    const backButton = await screen.findByTestId(/back-button/i);
    await userEvent.click(backButton);
    expect(mockedNavigator).toHaveBeenCalledWith(-1);
  });
});
