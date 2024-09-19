import { MemoryRouter } from "react-router-dom";

import {
  queries,
  render as renderRawComponent,
  RenderResult,
} from "@testing-library/react";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

type TestProps = {
  children: ReactNode;
};

export const TestProvider: React.FC<TestProps> = ({ children }) => {
  return (
    <RecoilRoot>
      <MemoryRouter>{children}</MemoryRouter>
    </RecoilRoot>
  );
};

export const renderTestComponent = (
  component: React.ReactElement,
): RenderResult<typeof queries, HTMLElement, HTMLElement> => {
  return renderRawComponent(component, {
    wrapper: TestProvider,
  });
};
