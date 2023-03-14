import classNames from "classnames";
import React, { FC } from "react";
import { CardProps } from "./Card.types";
import "./Card.scss";

const Card: FC<CardProps> = ({ className, children, ...rest }) => {
  return (
    <div className={classNames("pui-card", className)} {...rest}>
      {children}
    </div>
  );
};

export default Card;
