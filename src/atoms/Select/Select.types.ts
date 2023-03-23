import { Sizes } from "types/common";

export interface SelectProps {
  label?: string;
  error?: string;
  multiple?: boolean;
  disabled?: boolean;
  clearable?: boolean;
  searchable?: boolean;
  size?: Sizes;
}
