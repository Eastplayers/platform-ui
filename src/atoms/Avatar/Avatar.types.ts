import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export interface AvatarProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  size?: number;
}
