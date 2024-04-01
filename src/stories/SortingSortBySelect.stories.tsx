import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import SortingSortBySelect from "../components/sorting/SortingSortBySelect";
const meta = {
  title: "Components/Sorting/SortingSortBySelect",
  component: SortingSortBySelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    resetTags: {
      action: "reset",
      description: "Function to reset current stored tags",
    },
    fields: {
      description: "Fields to sort by",
      defaultValue: ["name", "popularity"],
    },
    device: {
      description: "Device size",
      defaultValue: "large",
    },
  },
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} satisfies Meta<typeof SortingSortBySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
    resetTags: () => {},
    fields: ["name", "popularity"],
    device: "large",
  },
};
export const Mobile: Story = {
  args: {
    resetTags: () => {},
    fields: ["name", "popularity"],
    device: "small",
  },
};
