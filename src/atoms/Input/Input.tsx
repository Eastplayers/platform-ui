import classNames from "classnames";
import React, { FC } from "react";
import { InputProps } from "./Input.types";
import "./Input.scss";
import Text from "../Text";

const Input: FC<InputProps> = ({ label, className, error, size, ...rest }) => {
  return (
    <div className={classNames("pui-field", size)}>
      {label && (
        <label className="pui-input-label">
          <Text>{label}</Text>
        </label>
      )}
      <input className={classNames("pui-input", className)} {...rest} />
      {error && <span className="pui-input-error">{error}</span>}
    </div>
  );
};

export default Input;
