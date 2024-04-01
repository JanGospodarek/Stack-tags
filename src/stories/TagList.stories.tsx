import { StoryObj, Meta } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { useArgs } from "@storybook/client-api";

import TagList from "../components/tags/TagList";
import { PropagateLoader } from "react-spinners";
import Skull from "../components/svgs/Skull";
import { Tag as TagType } from "../store/types";
import Tag from "../components/tags/Tag";
const meta = {
  title: "Components/Tags/TagList",
  component: TagList,
  parameters: {
    layout: "centered",
  },
  args: {
    loading: false,
    error: "",
  },
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = ({ loading, error, ...args }: any) => {
  return (
    <div
      className={`overflow-y-scroll h-[100%] w-[100%] px-8 mt-8 flex sm:flex-wrap gap-4  flex-col sm:flex-row ${
        (loading || error) && "justify-center items-center"
      }`}
    >
      {/* {!error && loading && <PropagateLoader color="#9353D3" />}   */}
      {/* ^ This does not work in sotrybooks*/}
      {!error && loading && <div>Loading...</div>}
      {error && (
        <div className="flex items-center gap-4">
          <Skull />
          <p className="font-bold text-gray-600">{error}</p>
        </div>
      )}
      {!loading &&
        !error &&
        tags.map((el, i) => (
          <Tag key={el.name + String(el.popularity)} tag={el} tagIndex={i} />
        ))}
    </div>
  );
};
var tags = [
  {
    name: "Tag1",
    page: 1,
    popularity: 1,
    hasSynonyms: false,
    isRequired: false,
  },
  {
    name: "Tag2",
    page: 1,
    popularity: 2,
    hasSynonyms: false,
    isRequired: false,
  },
  {
    name: "Tag3",
    page: 1,
    popularity: 3,
    hasSynonyms: false,
    isRequired: false,
  },
  {
    name: "Tag4",
    page: 2,
    popularity: 4,
    hasSynonyms: false,
    isRequired: false,
  },
  {
    name: "Tag5",
    page: 2,
    popularity: 5,
    hasSynonyms: false,
    isRequired: false,
  },
  {
    name: "Tag6",
    page: 2,
    popularity: 6,
    hasSynonyms: false,
    isRequired: false,
  },
  {
    name: "Tag7",
    page: 3,
    popularity: 7,
    hasSynonyms: false,
    isRequired: false,
  },
  {
    name: "Tag8",
    page: 3,
    popularity: 8,
    hasSynonyms: false,
    isRequired: false,
  },
  {
    name: "Tag9",
    page: 3,
    popularity: 9,
    hasSynonyms: false,
    isRequired: false,
  },
] as TagType[];
