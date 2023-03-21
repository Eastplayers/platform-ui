import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Sizes } from "../../types/common";

export interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "size"
  > {
  label?: string;
  size?: Sizes;
  error?: string;
}
