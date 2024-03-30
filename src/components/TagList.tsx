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

  const getTags = async (changeOfSorting: boolean) => {
    if (
      !changeOfSorting &&
      tags.findIndex((tag) => tag.page === currentPage) !== -1
    )
      return; //FIX BUG HERE
    console.log("fetching tags");
    try {
      console.log("fetching tags");
      setLoading(true);
      const [resTags, hasMore] = await fetchTags(
        currentPage,
        itemsPerPage,
        sorting,
        sortBy
      );
      console.log(resTags);
      dispatch(setTags({ tags: resTags, hasMore }));
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
    }
  };
  useEffect(() => {
    getTags(false);
  }, [currentPage]);

  useEffect(() => {
    dispatch(resetTags());
    dispatch(setPageNumber(1));
    getTags(true);
  }, [sortBy, sorting, itemsPerPage]);

  return (
    <div
      className={`overflow-y-scroll h-[100%] w-[100%] p-8 flex flex-wrap gap-4 mr-2 ${
        (loading || error) && "justify-center items-center"
      }`}
    >
      {!error && loading && <PropagateLoader color="#9353D3" />}
      {error && (
        <div className="flex items-center gap-4">
          <Skull />
          <p className="font-bold text-gray-600">{error}</p>
        </div>
      )}

      {!loading &&
        !error &&
        tags
          .filter((tag) => tag.page === currentPage)
          .map((el, i) => (
            <Tag
              key={el.name + String(el.popularity)}
              tag={el}
              index={(currentPage - 1) * itemsPerPage + (i + 1)}
            />
          ))}
    </div>
  );
};
export default TagList;
