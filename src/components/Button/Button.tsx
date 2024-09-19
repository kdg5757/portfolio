import { ReactNode } from "react";

import Styles from "./Button.module.scss";

type Props = {
  label: ReactNode;
  isDisabled?: boolean;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({
  className,
  label,
  isDisabled,
  onClick,
  ...props
}) => {
  return (
    <button
      className={`${Styles.button} ${className}`}
      onClick={onClick}
      disabled={isDisabled}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
