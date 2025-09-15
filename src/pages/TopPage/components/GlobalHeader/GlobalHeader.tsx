import { ReactNode, useMemo, useState } from "react";

import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
const { useBreakpoint } = Grid;
import { Grid } from "antd";

import {
  buttonStyle,
  menuAreaPositionStyle,
  menuAreaStyle,
  wrapperStyle,
} from "./GlobalHeader.styles";

type Props = {
  title: string;
  menuList: ReactNode;
};

const GlobalHeader: React.FC<Props> = ({ title, menuList }) => {
  const screens = useBreakpoint();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMemo(() => !screens.md, [screens]);

  return (
    <header css={wrapperStyle}>
      <div>{title}</div>
      {isMobile ? (
        <button
          type="button"
          css={buttonStyle}
          onClick={(): void => setIsOpen(!isOpen)}
          data-testid="menu-button"
        >
          {!isOpen ? (
            <MenuOutlined style={{ fontSize: "20px" }} />
          ) : (
            <CloseOutlined style={{ fontSize: "20px" }} />
          )}
        </button>
      ) : null}
      <div
        css={[
          menuAreaStyle(!isMobile || isOpen),
          menuAreaPositionStyle(isMobile),
        ]}
      >
        {menuList}
      </div>
    </header>
  );
};

export default GlobalHeader;
