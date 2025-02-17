import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import PricingCard from "../components/PricingCard";

export default {
  title: "Components/PricingCard",
  component: PricingCard,
  argTypes: {
    selected: { control: "text" },
  },
} as Meta;

const Template: StoryFn<typeof PricingCard> = (args) => {
  const [selected, setSelected] = useState("");
  return <PricingCard {...args} selected={selected} setSelected={setSelected} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Pro Plan",
  subtitle: "Best for professionals",
  price: 49,
  features: [
    { text: "Feature 1", enabled: true },
    { text: "Feature 2", enabled: false },
  ],
};