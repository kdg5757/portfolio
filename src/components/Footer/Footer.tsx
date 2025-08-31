import { ReactNode } from "react";

import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

import { wrapperStyle } from "./Footer.styles";

type Props = {
  children?: ReactNode;
  css?: Interpolation<DefaultTheme>;
};

const Footer: React.FC<Props> = ({ children, css }) => (
  <footer css={[wrapperStyle, css]}>{children}</footer>
);

export default Footer;
