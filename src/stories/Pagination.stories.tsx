import { StoryObj, Meta } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Pagination from "../components/Pagination";
const meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
