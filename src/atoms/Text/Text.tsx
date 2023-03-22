import classNames from "classnames";
import { FC } from "react";
import "./Text.scss";
import { TextProps } from "./Text.types";

const Text: FC<TextProps> = ({
  children,
  type,
  className,
  decoration,
  align,
  color,
}) => {
  return (
    <div
      className={classNames("pui-text", type, decoration, align, className)}
      style={{ color }}
    >
      {children}
    </div>
  );
};

Text.defaultProps = {
  type: "body-2",
  decoration: "none",
  align: "left",
};

export default Text;
