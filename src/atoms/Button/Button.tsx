import React, { FC } from "react";
import { ButtonProps, ButtonSizes, ButtonVariants } from "./Button.types";
import "./Button.scss";
import classNames from "classnames";

const Button: FC<ButtonProps> = ({
  children,
  variant = ButtonVariants.PRIMARY,
  size = ButtonSizes.MEDIUM,
  ...rest
}) => {
  return (
    <button
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

export default Button;
