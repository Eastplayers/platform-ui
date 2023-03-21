import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

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

export const Sizes = ["base", "lg"] as const;
export type ButtonSizes = (typeof Sizes)[number];

export const Variants = ["primary", "secondary", "ghost"] as const;
export type ButtonVariants = (typeof Variants)[number];
