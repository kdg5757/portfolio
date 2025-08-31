import { Layout as AntdLayout } from "antd";

import { wrapperStyle } from "./Layout.styles";

type Props = React.ComponentProps<typeof AntdLayout>;

const Layout: React.FC<Props> = ({ children, ...props }) => (
  <AntdLayout css={wrapperStyle} {...props}>
    {children}
  </AntdLayout>
);

export default Layout;
