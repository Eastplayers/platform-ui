import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { default as InputComponent } from "./Input";
import { InputSizes } from "./Input.types";

export const Input: ComponentStory<typeof InputComponent> = (args) => {
  return <InputComponent {...args} />;
};

export default {
  title: "Platform UI/Atoms/Input",
  component: InputComponent,
  args: {
    size: InputSizes.MEDIUM,
    disabled: false,
    label: "Label",
    placeholder: "Placeholder",
  },
  argTypes: {
    size: {
      options: Object.values(InputSizes),
      control: { type: "radio" },
    },
    disabled: {
      control: "boolean",
    },
    onChange: { action: "clicked" },
  },
} as ComponentMeta<typeof InputComponent>;
