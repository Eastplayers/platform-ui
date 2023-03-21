import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SizeArr } from "../../types/common";
import { default as SelectComponent } from "./Select";

export const Select: ComponentStory<typeof SelectComponent> = (args) => {
  return <SelectComponent {...args} />;
};

export default {
  title: "Platform UI/Atoms/Select",
  component: SelectComponent,
  args: {
    label: "Label",
    options: [...new Array(10)].map((_, index) => ({
      label: `Option ${index + 1}`,
      value: `option-${index + 1}`,
    })),
    placeholder: "Select an option",
    disabled: false,
    multiple: false,
    searchable: true,
    clearable: false,
    size: "base",
  },
  argTypes: {
    size: {
      options: SizeArr,
      control: { type: "radio" },
    },
    onChange: { action: "clicked" },
  },
} as ComponentMeta<typeof SelectComponent>;
