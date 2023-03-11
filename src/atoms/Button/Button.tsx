import React, { FC } from "react";
import { ButtonProps } from "./Button.types";
import "./Button.scss";

const Button: FC<ButtonProps> = ({ children }) => {
  return <button className="pui-btn">{children}</button>;
};

export default Button;
