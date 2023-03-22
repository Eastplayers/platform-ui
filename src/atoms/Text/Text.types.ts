import { ReactNode } from "react";

export interface TextProps {
  children?: ReactNode;
  className?: string;
  type?: TextTypes;
  decoration?: TextDecorations;
  color?: string;
  align?: TextAligns;
}

export const Aligns = ["left", "center", "right", "justify"] as const;
export type TextAligns = (typeof Aligns)[number];

export const Types = [
  "headline-4",
  "headline-5",
  "title-1",
  "title-2",
  "title-3",
  "body-1",
  "body-2",
  "body-3",
] as const;
export type TextTypes = (typeof Types)[number];

export const Decorations = ["none", "underline", "line-through"] as const;
export type TextDecorations = (typeof Decorations)[number];
