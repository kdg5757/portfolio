import { Layout as AntdLayout } from "antd";

import { wrapperStyle } from "./Content.styles";

type Props = React.ComponentProps<typeof AntdLayout.Content>;

const Content: React.FC<Props> = ({ children, ...props }) => (
  <AntdLayout.Content css={wrapperStyle} {...props}>
    {children}
  </AntdLayout.Content>
);

export default Content;
