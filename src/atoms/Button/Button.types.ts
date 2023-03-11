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
  BIG = "BIG",
  MEDIUM = "MEDIUM",
}

export enum ButtonVariants {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  GHOST = "GHOST",
}
