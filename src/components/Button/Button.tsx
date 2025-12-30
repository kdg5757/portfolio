import { Button as AntButton } from "antd";

import { buttonStyle } from "./Button.styles";

type Props = Omit<React.ComponentProps<typeof AntButton>, "type"> & {
  type: "primary" | "dashed" | "text";
};

const Button: React.FC<Props> = ({ type, children, ...props }) => (
  <AntButton type={type} css={buttonStyle} {...props}>
    {children}
  </AntButton>
);

export default Button;
