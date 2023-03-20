import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "size"
  > {
  label?: string;
  size?: InputSizes;
  error?: string;
}

export enum InputSizes {
  BIG = "big",
  MEDIUM = "medium",
}
