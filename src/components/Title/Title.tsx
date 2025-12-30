import { ReactNode } from "react";

import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

import { titleStyle } from "./Title.styles";

type Props = {
  tag?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  css?: Interpolation<DefaultTheme>;
};

const Title: React.FC<Props> = ({ tag = "h1", children, css, ...props }) => {
  const Tag = tag;

  return (
    <Tag css={[titleStyle, css]} {...props}>
      {children}
    </Tag>
  );
};

export default Title;
