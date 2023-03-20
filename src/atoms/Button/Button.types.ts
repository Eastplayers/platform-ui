import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: ButtonSizes;
  variant?: ButtonVariants;
  disabled?: boolean;
  loading?: boolean;
}

export enum ButtonSizes {
  BIG = "big",
  MEDIUM = "medium",
}

export enum ButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  GHOST = "ghost",
}
