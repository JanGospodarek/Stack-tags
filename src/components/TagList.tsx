import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import fetchTags from "../utils/fetchTags";
import { resetTags, setPageNumber, setTags } from "../store/listSlice";
import compare from "../utils/compareStringsOrNumbers";
import Tag from "./Tag";
import { PropagateLoader } from "react-spinners";
import Skull from "./svgs/Skull";
const TagList = () => {
  const dispatch = useAppDispatch();
  const tags = useAppSelector((state) => state.list.tags);
  const currentPage = useAppSelector((state) => state.list.page);
  const itemsPerPage = useAppSelector((state) => state.list.itemsPerPage);
  const sortBy = useAppSelector((state) => state.list.sortBy);
  const sorting = useAppSelector((state) => state.list.sorting);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getTags = async () => {
    // const resTags = await fetchTags(currentPage, itemsPerPage, sorting, sortBy);
    setLoading(true);

    const resTags = [
      {
        name: "name",
        count: 1,
        hasSynonyms: false,
        isRequired: false,
        page: 1,
      },
      {
        name: "name",
        count: 1,
        hasSynonyms: false,
        isRequired: false,
        page: 1,
      },
      {
        name: "name",
        count: 1,
        hasSynonyms: false,
        isRequired: false,
        page: 1,
      },
    ];
    function timeout(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    await timeout(2000);
    dispatch(setTags(resTags));
    setLoading(false);
  };
  useEffect(() => {
    getTags();
  }, [currentPage]);
  useEffect(() => {
    console.log("loading", loading);
  }, [loading]);
  useEffect(() => {
    dispatch(resetTags());
    dispatch(setPageNumber(1));
    getTags();
  }, [sortBy, sorting, itemsPerPage]);

  return (
    <div
      className={`overflow-y-scroll h-[100%] w-[100%] p-8 flex flex-wrap gap-4 mr-2 ${
        (loading || error) && "justify-center items-center"
      }`}
    >
      {loading && <PropagateLoader color="#9353D3" />}
      {error && (
        <div className="flex items-center gap-4">
          <Skull />
          <p className="font-bold text-gray-600">{error}</p>
        </div>
      )}

      {tags
        .filter((tag) => tag.page === currentPage)
        .map((el, i) => (
          <Tag tag={el} index={(currentPage - 1) * itemsPerPage + (i + 1)} />
        ))}
    </div>
  );
};
export default TagList;
