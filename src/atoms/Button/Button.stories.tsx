import React, { FC } from "react";
import Button from "./Button";
import { ButtonProps, ButtonSizes, ButtonVariants } from "./Button.types";

export const Template: FC<ButtonProps> = (props) => {
  return <Button {...props}>Button</Button>;
};

Template.args = {
  variant: ButtonVariants.PRIMARY,
  size: ButtonSizes.MEDIUM,
  disabled: false,
};

export default {
  title: "Atoms/Button",
  argTypes: {
    variant: {
      options: Object.values(ButtonVariants),
      control: { type: "radio" },
    },
    size: {
      options: Object.values(ButtonSizes),
      control: { type: "radio" },
    },
    disabled: {
      control: "boolean",
    },
  },
};
