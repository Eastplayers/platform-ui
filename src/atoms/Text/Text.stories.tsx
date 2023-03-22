import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as TextComponent } from "./Text";
import { Decorations, Types } from "./Text.types";

export const Text: ComponentStory<typeof TextComponent> = (args) => {
  return <TextComponent {...args} />;
};

export default {
  title: "Platform UI/Atoms/Text",
  component: TextComponent,
  args: {
    type: "body-2",
    children: "Sample text",
    decoration: "none",
  },
  argTypes: {
    type: {
      options: Types,
      control: { type: "select" },
    },
    decoration: {
      options: Decorations,
      control: { type: "select" },
    },
    children: { control: { type: "text" } },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof TextComponent>;
