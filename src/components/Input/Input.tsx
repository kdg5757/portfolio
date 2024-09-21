import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
} from "react";

import Styles from "./Input.module.scss";

type Props = {
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  isDisabled?: boolean;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};

const Input: React.FC<Props> = ({
  type,
  placeholder,
  className,
  isDisabled,
  onChange,
  onFocus,
  onBlur,
  ...props
}) => {
  return (
    <input
      type={type}
      className={`${Styles.input} ${className}`}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={isDisabled}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
