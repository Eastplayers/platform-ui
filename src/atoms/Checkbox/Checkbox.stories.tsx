import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as CheckboxComponent } from "./Checkbox";
import { CheckboxSizes } from "./Checkbox.types";

export const Checkbox: ComponentStory<typeof CheckboxComponent> = (args) => {
  return <CheckboxComponent {...args} />;
};

export default {
  title: "Platform UI/Atoms/Checkbox",
  component: CheckboxComponent,
  args: {
    size: CheckboxSizes.MEDIUM,
    disabled: false,
  },
  argTypes: {
    size: {
      options: Object.values(CheckboxSizes),
      control: { type: "radio" },
    },
    disabled: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof CheckboxComponent>;
