import { FC } from "react";
import { SelectProps } from "./Select.types";
import { default as ReactSelect } from "react-select";
import "./Select.scss";
import classNames from "classnames";
import Text from "../Text";
import { Colors } from "../../theme";

const Select: FC<SelectProps> = ({
  label,
  error,
  multiple,
  disabled,
  clearable,
  searchable,
  size,
  ...rest
}) => {
  return (
    <div className={classNames("pui-field", size)}>
      {label && <label className="pui-input-label">{label}</label>}
      <ReactSelect
        menuIsOpen
        isClearable={clearable}
        isSearchable={searchable}
        isDisabled={disabled}
        isMulti={multiple}
        closeMenuOnSelect={!multiple}
        closeMenuOnScroll
        {...rest}
        classNamePrefix="pui-select"
        noOptionsMessage={() => <Text color={Colors.GREY_300}>None</Text>}
      />
      {error && <span className="pui-input-error">{error}</span>}
    </div>
  );
};

export default Select;
