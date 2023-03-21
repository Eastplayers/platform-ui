import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Sizes } from "../../types/common";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: Sizes;
  variant?: ButtonVariants;
  disabled?: boolean;
  loading?: boolean;
}

export const Variants = ["primary", "secondary", "ghost"] as const;
export type ButtonVariants = (typeof Variants)[number];
