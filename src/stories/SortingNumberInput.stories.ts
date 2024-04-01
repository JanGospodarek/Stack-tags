import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import SortingNumberInput from "../components/ui/filtering/SortingNumberInput";
import { Provider } from "react-redux";
import { store } from "../store/store";
const meta = {
  title: "Components/SortingNumberInput",
  component: SortingNumberInput,

  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    resetTags: {
      action: "reset",
      description: "Function to reset current stored tags",
    },
  },
} satisfies Meta<typeof SortingNumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    resetTags: () => {},
  },
};
