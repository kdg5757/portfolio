import { ReactNode } from "react";

import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

import { wrapperStyle } from "./Footer.styles";

type Props = {
  children?: ReactNode;
  css?: Interpolation<DefaultTheme>;
};

const Footer: React.FC<Props> = ({ children, css, ...props }) => (
  <footer css={[wrapperStyle, css]} {...props}>
    {children}
  </footer>
);

export default Footer;
