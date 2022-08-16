import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Unreal-UI/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  onClick: () => alert('Clicked'),
  size: 'medium',
  type: 'primary',
  text: "Hello world!",
};
