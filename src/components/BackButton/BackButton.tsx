import { useNavigate } from "react-router-dom";

import { LeftOutlined } from "@ant-design/icons";

import { buttonStyle } from "./BackButton.styles";

type Props = {
  to?: string;
  onClick?: () => void;
};

const BackButton: React.FC<Props> = ({ to, onClick, ...props }) => {
  const navigate = useNavigate();

  const toPage = (): void => {
    if (to) {
      navigate(to);
      return;
    }

    if (onClick) {
      onClick();
      return;
    }

    navigate(-1);
  };

  return (
    <button
      type="button"
      onClick={toPage}
      css={buttonStyle}
      data-testid="back-button"
      {...props}
    >
      <LeftOutlined size={16} data-testid="left-icon" />
    </button>
  );
};

export default BackButton;
