import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { Sizes } from "../../types/common";

export interface TextareaProps
  extends Omit<
    DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    "size"
  > {
  label?: string;
  size?: Sizes;
  error?: string;
}
