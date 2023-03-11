import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import React from "react";
import { default as ButtonComponent } from "./Button";
import { ButtonSizes, ButtonVariants } from "./Button.types";

export const Button: ComponentStory<typeof ButtonComponent> = (args) => {
  return <ButtonComponent {...args}>Button</ButtonComponent>;
};

Button.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole("button"));
};

export default {
  title: "Platform UI/Atoms/Button",
  component: ButtonComponent,
  args: {
    variant: ButtonVariants.PRIMARY,
    size: ButtonSizes.MEDIUM,
    disabled: false,
  },
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
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof ButtonComponent>;
