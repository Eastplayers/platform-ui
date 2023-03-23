import classNames from "classnames";
import { FC } from "react";
import Text from "../Text";
import "./Textarea.scss";
import { TextareaProps } from "./Textarea.types";

const Textarea: FC<TextareaProps> = ({
  label,
  className,
  error,
  size,
  ...rest
}) => {
  return (
    <div className={classNames("pui-field")}>
      {label && (
        <label className="pui-input-label">
          <Text>{label}</Text>
        </label>
      )}
      <textarea
        className={classNames("pui-input", size, className)}
        {...rest}
      ></textarea>
      {error && <span className="pui-input-error">{error}</span>}
    </div>
  );
};

Textarea.defaultProps = {
  size: "base",
};

export default Textarea;
