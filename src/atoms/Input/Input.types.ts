import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
import { Sizes } from "../../types/common";

export interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "size" | "prefix"
  > {
  label?: string;
  size?: Sizes;
  error?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
}
