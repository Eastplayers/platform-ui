import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { SizeArr } from "../../types/common";
import { default as ButtonComponent } from "./Button";
import { Variants } from "./Button.types";

export const Button: ComponentStory<typeof ButtonComponent> = (args) => {
  return <ButtonComponent {...args}>Sample button</ButtonComponent>;
};

Button.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole("button"));
};

export default {
  title: "Platform UI/Atoms/Button",
  component: ButtonComponent,
  args: {
    variant: "primary",
    size: "base",
    disabled: false,
  },
  argTypes: {
    variant: {
      options: SizeArr,
      control: { type: "radio" },
    },
    size: {
      options: Variants,
      control: { type: "radio" },
    },
    disabled: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof ButtonComponent>;
