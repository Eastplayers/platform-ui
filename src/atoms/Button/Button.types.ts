import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Sizes } from "../../types/common";

export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "type"
  > {
  size?: Sizes;
  variant?: ButtonVariants;
  disabled?: boolean;
  loading?: boolean;
  htmlType?: "button" | "reset" | "submit";
  type?: ButtonTypes;
}

export const Variants = ["primary", "secondary", "danger"] as const;
export type ButtonVariants = (typeof Variants)[number];

export const Types = ["default", "outline", "borderless"] as const;
export type ButtonTypes = (typeof Types)[number];
