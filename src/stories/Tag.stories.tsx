import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import Tag from "../components/tags/Tag";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { Tag as TagType } from "../store/types";
const meta = {
  title: "Components/Tags/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tag: {
      description: "Tag to display",
      defaultValue: {
        name: "Tag",
        page: 1,
        popularity: 1,
        hasSynonyms: false,
        isRequired: false,
      } as TagType,
    },
    tagIndex: {
      description: "Index of tag in the list",
      defaultValue: 0,
    },
  },

  //   decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tag: {
      name: "Tag",
      page: 1,
      popularity: 1,
      hasSynonyms: false,
      isRequired: false,
    },
    tagIndex: 0,
  },
};
