import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import fetchTags from "../utils/fetchTags";
import { setTags } from "../store/listSlice";
const TagList = () => {
  const dispatch = useAppDispatch();
  const tags = useAppSelector((state) => state.list.sortedTags);
  const currentPage = useAppSelector((state) => state.list.page);
  const itemsPerPage = useAppSelector((state) => state.list.itemsPerPage);

  useEffect(() => {
    (async () => {
      const resTags = await fetchTags(currentPage, itemsPerPage);
      dispatch(setTags(resTags));
      console.log(resTags);
    })();
  }, [currentPage, itemsPerPage]);
  return <div></div>;
};
export default TagList;
