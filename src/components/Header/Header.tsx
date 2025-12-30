import { ReactNode } from "react";

import { centerStyle, sideStyle, wrapperStyle } from "./Header.styles";

type Props = {
  left?: ReactNode;
  right?: ReactNode;
  children?: ReactNode;
};

const Header: React.FC<Props> = ({ left, right, children }) => (
  <header css={wrapperStyle}>
    <div css={sideStyle}>{left}</div>
    <div css={centerStyle}>{children}</div>
    <div css={sideStyle}>{right}</div>
  </header>
);

export default Header;
