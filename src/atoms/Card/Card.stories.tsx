import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { default as CardComponent } from "./Card";

export const Card: ComponentStory<typeof CardComponent> = (args) => {
  return <CardComponent {...args} />;
};

export default {
  title: "Platform UI/Atoms/Card",
  component: CardComponent,
  args: {
    children: "Sample card",
  },
  argTypes: {
    children: { control: { type: "text" } },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof CardComponent>;
