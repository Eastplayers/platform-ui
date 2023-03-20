import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  size?: InputSizes;
  error?: string;
}

export enum InputSizes {
  BIG = "big",
  MEDIUM = "medium",
}
