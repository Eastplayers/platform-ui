import { FC } from "react";
import { AvatarProps } from "./Avatar.types";
import "./Avatar.scss";
import classNames from "classnames";

const Avatar: FC<AvatarProps> = ({
  size,
  style,
  className,
  src,
  alt,
  ...rest
}) => {
  if (!src) {
    return (
      <div
        className={classNames("pui-avatar blank", className)}
        style={{
          width: size,
          height: size,
          fontSize: (size || 40) / 2,
          ...style,
        }}
      >
        {alt?.[0]}
      </div>
    );
  }

  return (
    <img
      className={classNames("pui-avatar", className)}
      src={src}
      alt={alt}
      {...rest}
      style={{ width: size, height: size, ...style }}
    />
  );
};

Avatar.defaultProps = {
  size: 40,
};

export default Avatar;
