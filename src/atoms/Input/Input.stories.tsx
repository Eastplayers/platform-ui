import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SizeArr } from "../../types/common";
import { default as InputComponent } from "./Input";

export const Input: ComponentStory<typeof InputComponent> = (args) => {
  return <InputComponent {...args} />;
};

export default {
  title: "Platform UI/Atoms/Input",
  component: InputComponent,
  args: {
    size: "base",
    disabled: false,
    label: "Label",
    placeholder: "Placeholder",
  },
  argTypes: {
    size: {
      options: SizeArr,
      control: { type: "radio" },
    },
    disabled: {
      control: "boolean",
    },
    onChange: { action: "clicked" },
  },
} as ComponentMeta<typeof InputComponent>;
