import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import SortingSwitch from "../components/sorting/SortingSwitch";
import { Provider } from "react-redux";
import { store } from "../store/store";
const meta = {
  title: "Components/Sorting/SortingSwitch",
  component: SortingSwitch,
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
} satisfies Meta<typeof SortingSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    resetTags: () => {},
  },
};
