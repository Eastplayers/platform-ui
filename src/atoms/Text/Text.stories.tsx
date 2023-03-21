import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as TextComponent } from "./Text";
import { TextDecorations, TextTypes } from "./Text.types";

export const Text: ComponentStory<typeof TextComponent> = (args) => {
  return <TextComponent {...args} />;
};

export default {
  title: "Platform UI/Atoms/Text",
  component: TextComponent,
  args: {
    type: TextTypes.BODY_2,
    children: "Sample text",
    decoration: TextDecorations.NONE,
  },
  argTypes: {
    type: {
      options: Object.values(TextTypes),
      control: { type: "select" },
    },
    decoration: {
      options: Object.values(TextDecorations),
      control: { type: "select" },
    },
    children: { control: { type: "text" } },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof TextComponent>;
