import { ReactNode } from "react";
import { Sizes } from "types/common";

export interface SelectProps {
  label?: string;
  error?: string;
  multiple?: boolean;
  disabled?: boolean;
  clearable?: boolean;
  searchable?: boolean;
  creatable?: boolean;
  size?: Sizes;
  suffix?: ReactNode;
  prefix?: ReactNode;
}
