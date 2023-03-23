import classNames from "classnames";
import { FC } from "react";
import "./Checkbox.scss";
import { CheckboxProps, CheckboxSizes } from "./Checkbox.types";

const Checkbox: FC<CheckboxProps> = ({
  label,
  size = CheckboxSizes.MEDIUM,
  ...rest
}) => {
  return (
    <label
      aria-label={label}
      className={classNames("pui-checkbox", {
        [`pui-checkbox-${size}`]: !!size,
      })}
    >
      <input className="pui-checkbox-input" type="checkbox" {...rest} />
      <span className="pui-checkbox-checkmark-container">
        <span className="pui-checkbox-checkmark" />
      </span>
      {label}
    </label>
  );
};

export default Checkbox;
