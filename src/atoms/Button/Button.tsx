import classNames from "classnames";
import React, { FC } from "react";
import "./Button.scss";
import { ButtonProps, ButtonSizes, ButtonVariants } from "./Button.types";

const Button: FC<ButtonProps> = ({
  children,
  variant,
  size,
  loading,
  disabled,
  ...rest
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={classNames("pui-btn", {
        [`pui-btn-${variant}`]: !!variant,
        [`pui-btn-${size}`]: !!size,
      })}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: ButtonVariants.PRIMARY,
  size: ButtonSizes.MEDIUM,
};

export default Button;
