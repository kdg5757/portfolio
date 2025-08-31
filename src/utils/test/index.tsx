import { MemoryRouter } from "react-router-dom";

import {
  queries,
  render as renderRawComponent,
  RenderResult,
} from "@testing-library/react";
import { ReactNode } from "react";
import { Provider as JotaiProvider } from "jotai";

type TestProps = {
  children: ReactNode;
};

export const TestProvider: React.FC<TestProps> = ({ children }) => {
  return (
    <JotaiProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </JotaiProvider>
  );
};

export const renderTestComponent = (
  component: React.ReactElement,
): RenderResult<typeof queries, HTMLElement, HTMLElement> => {
  return renderRawComponent(component, {
    wrapper: TestProvider,
  });
};
