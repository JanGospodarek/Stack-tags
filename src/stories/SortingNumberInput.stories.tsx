import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import SortingNumberInput from "../components/sorting/SortingNumberInput";
import { Provider } from "react-redux";
import { store } from "../store/store";
const meta = {
  title: "Components/Sorting/SortingNumberInput",
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
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} satisfies Meta<typeof SortingNumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    resetTags: () => {},
  },
};
