import classNames from "classnames";
import { FC } from "react";
import Text from "../Text";
import "./Input.scss";
import { InputProps } from "./Input.types";

const Input: FC<InputProps> = ({
  label,
  className,
  error,
  size,
  prefix,
  suffix,
  ...rest
}) => {
  return (
    <div className={classNames("pui-field")}>
      {label && (
        <label className="pui-input-label">
          <Text>{label}</Text>
        </label>
      )}
      <div className={classNames("pui-input", size, className)}>
        {!!prefix && prefix}
        <input {...rest} />
        {!!suffix && suffix}
      </div>
      {error && <span className="pui-input-error">{error}</span>}
    </div>
  );
};

Input.defaultProps = {
  size: "base",
};

export default Input;
