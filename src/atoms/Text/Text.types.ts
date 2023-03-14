import { ReactNode } from "react";

export interface TextProps {
  children?: ReactNode;
  className?: string;
  type?: TextTypes;
  decoration?: TextDecorations;
}

export enum TextTypes {
  HEADLINE_4 = "headline-4",
  HEADLINE_5 = "headline-5",
  TITLE_1 = "title-1",
  TITLE_2 = "title-2",
  TITLE_3 = "title-3",
  BODY_1 = "body-1",
  BODY_2 = "body-2",
  BODY_3 = "body-3",
}

export enum TextDecorations {
  NONE = "none",
  UNDERLINE = "underline",
  LINE_THROUGH = "line-through",
}
