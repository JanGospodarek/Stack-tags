import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import fetchTags from "../utils/fetchTags";
import { setPageNumber, setTags } from "../store/listSlice";
import compare from "../utils/compareStringsOrNumbers";
import Tag from "./Tag";
const TagList = () => {
  const dispatch = useAppDispatch();
  const tags = useAppSelector((state) => state.list.tags);
  const currentPage = useAppSelector((state) => state.list.page);
  const itemsPerPage = useAppSelector((state) => state.list.itemsPerPage);
  const sortBy = useAppSelector((state) => state.list.sortBy);
  const sorting = useAppSelector((state) => state.list.sorting);
  const getTags = async () => {
    const resTags = await fetchTags(currentPage, itemsPerPage, sorting, sortBy);
    dispatch(setTags(resTags));
  };
  useEffect(() => {
    getTags();
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    dispatch(setPageNumber(1));
    getTags();
  }, [sortBy, sorting]);

  //   const sorted = useMemo(
  //     () => [...tags].sort((a, b) => compare(a[sortBy], b[sortBy], sorting)),
  //     [tags, sortBy, sorting]
  //   );

  return (
    <div className="overflow-y-scroll h-[100%] w-[100vw] p-8 flex flex-wrap gap-4">
      {tags.map((el, i) => (
        <Tag tag={el} index={(currentPage - 1) * itemsPerPage + (i + 1)} />
      ))}
    </div>
  );
};
export default TagList;
