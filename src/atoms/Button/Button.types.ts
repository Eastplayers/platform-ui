import { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
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
