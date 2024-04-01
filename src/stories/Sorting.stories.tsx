import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Sorting from "../components/sorting/Sorting";
const meta = {
  title: "Components/Sorting/Sorting",
  component: Sorting,
  parameters: {
    layout: "centered",
  },

  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} satisfies Meta<typeof Sorting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
