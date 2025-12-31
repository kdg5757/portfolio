import { ReactNode } from "react";

import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

import { descriptionStyle } from "./Description.styles";

type Props = {
  children: ReactNode;
  css?: Interpolation<DefaultTheme>;
};

const Description: React.FC<Props> = ({ children, css, ...props }) => (
  <p css={[descriptionStyle, css]} {...props}>
    {children}
  </p>
);

export default Description;
