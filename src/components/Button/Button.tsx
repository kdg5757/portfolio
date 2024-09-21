import { ReactNode } from "react";

import Styles from "./Button.module.scss";

type Props = {
  children: ReactNode;
  isDisabled?: boolean;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({
  className,
  children,
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
      {children}
    </button>
  );
};

export default Button;
