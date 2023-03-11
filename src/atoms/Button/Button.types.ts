import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  size?: ButtonSizes;
  variant?: ButtonVariants;
  disabled?: boolean;
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
