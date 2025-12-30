import { ReactNode } from "react";

import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

import { columnStyle } from "./ColumnBox.styles";

type Props = {
  children: ReactNode;
  css?: Interpolation<DefaultTheme>;
};

const ColumnBox: React.FC<Props> = ({ children, css, ...props }) => (
  <div css={[columnStyle, css]} {...props}>
    {children}
  </div>
);

export default ColumnBox;
