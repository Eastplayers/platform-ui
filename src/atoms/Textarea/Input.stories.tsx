import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SizeArr } from "../../types/common";
import { default as TextareaComponent } from "./Textarea";

export const Textarea: ComponentStory<typeof TextareaComponent> = (args) => {
  return <TextareaComponent {...args} />;
};

export default {
  title: "Platform UI/Atoms/Textarea",
  component: TextareaComponent,
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
} as ComponentMeta<typeof TextareaComponent>;
