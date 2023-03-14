import React, { FC } from "react";
import { TextProps, TextTypes } from "./Text.types";
import "./Text.scss";
import classNames from "classnames";

const Text: FC<TextProps> = ({
  children,
  type = TextTypes.BODY_2,
  className,
  decoration,
}) => {
  return (
    <div className={classNames("pui-text", type, decoration, className)}>
      {children}
    </div>
  );
};

export default Text;
