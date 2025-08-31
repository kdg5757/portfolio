import { composeStories } from "@storybook/react";

import * as stories from "./Home.stories";
import { renderTestComponent } from "~/utils/test";
import { mockServer } from "~/__mocks__/server";
import { testMockCustomApi } from "~/__mocks__/api/testMockApi";

const { Primary, Action, ErrorAction } = composeStories(stories);

describe("storybook UT", () => {
  // テスト前のセットアップ
  beforeAll(() => mockServer.listen());
  afterEach(() => mockServer.resetHandlers());
  afterAll(() => mockServer.close());

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

  test("ErrorAction", async () => {
    mockServer.use(testMockCustomApi.checkNumberError);
    await ErrorAction.load();

    const { container } = renderTestComponent(<ErrorAction />);

    await ErrorAction.play!({ canvasElement: container });
  });
});
