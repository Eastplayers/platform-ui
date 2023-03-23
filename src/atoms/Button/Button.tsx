import classNames from "classnames";
import { FC } from "react";
import "./Button.scss";
import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = ({
  children,
  variant,
  size,
  loading,
  disabled,
  type,
  htmlType,
  ...rest
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={classNames("pui-btn", {
        [`pui-btn-${variant}`]: !!variant,
        [`pui-btn-${type}`]: !!type,
        [`pui-btn-${size}`]: !!size,
      })}
      {...rest}
      type={htmlType}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
  size: "base",
  type: "default",
};

export default Button;
