import { ReactNode } from "react";

import { buttonStyle } from "./MenuLink.styles";

type Props = {
  name: ReactNode;
  to?: string;
  onClick?: () => void;
};

const MenuLink: React.FC<Props> = ({ name, to, onClick }) => {
  if (to) {
    return (
      <a href={to} css={buttonStyle}>
        {name}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} css={buttonStyle}>
      {name}
    </button>
  );
};

export default MenuLink;
