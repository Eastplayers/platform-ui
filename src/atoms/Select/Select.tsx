import classNames from "classnames";
import { FC } from "react";
import { default as ReactSelect, Props } from "react-select";
import { default as CreatableSelect } from "react-select/creatable";
import { Colors } from "../../theme";
import Text from "../Text";
import "./Select.scss";
import { SelectProps } from "./Select.types";

const Select: FC<
  Omit<
    Props,
    | "isMulti"
    | "isDisabled"
    | "isClearable"
    | "isSearchable"
    | "classNamePrefix"
  > &
    SelectProps
> = ({
  label,
  error,
  multiple,
  disabled,
  clearable,
  searchable,
  creatable,
  size,
  ...rest
}) => {
  const CustomSelect = (props: any) => {
    if (creatable) {
      return <CreatableSelect {...props} />;
    }

    return <ReactSelect {...props} />;
  };

  return (
    <div className={classNames("pui-field", size)}>
      {label && <label className="pui-input-label">{label}</label>}
      <CustomSelect
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
