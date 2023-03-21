import StateManagedSelect from "react-select/dist/declarations/src/stateManager";
import { Sizes } from "types/common";

export interface SelectProps
  extends Omit<
    StateManagedSelect,
    | "isMulti"
    | "isDisabled"
    | "isClearable"
    | "isSearchable"
    | "classNamePrefix"
  > {
  label?: string;
  error?: string;
  multiple?: boolean;
  disabled?: boolean;
  clearable?: boolean;
  searchable?: boolean;
  size?: Sizes;
}
