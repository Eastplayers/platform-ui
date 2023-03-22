import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as AvatarComponent } from "./Avatar";

export const Avatar: ComponentStory<typeof AvatarComponent> = (args) => {
  return <AvatarComponent {...args} />;
};

export default {
  title: "Platform UI/Atoms/Avatar",
  component: AvatarComponent,
  args: {
    src: "",
    alt: "",
    size: 40,
  },
  argTypes: {},
} as ComponentMeta<typeof AvatarComponent>;
