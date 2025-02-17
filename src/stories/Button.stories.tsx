import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "../components/shared/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    selected: { control: "text" },
  },
} as Meta;

const Template: StoryFn<typeof Button> = (args) => {
  const [selected, setSelected] = useState("");
  return <Button {...args} selected={selected} setSelected={setSelected} />;
};

export const Default = Template.bind({});
Default.args = {
  text: "Button",
  title: "Freebie",
  selected: "Freebie",
};