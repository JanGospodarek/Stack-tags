import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import fetchTags from "../utils/fetchTags";
import { setTags } from "../store/listSlice";
import compare from "../utils/compareStringsOrNumbers";
const TagList = () => {
  const dispatch = useAppDispatch();
  const tags = useAppSelector((state) => state.list.tags);
  const currentPage = useAppSelector((state) => state.list.page);
  const itemsPerPage = useAppSelector((state) => state.list.itemsPerPage);
  const sortBy = useAppSelector((state) => state.list.sortBy);
  const sorting = useAppSelector((state) => state.list.sorting);

  useEffect(() => {
    (async () => {
      const resTags = await fetchTags(currentPage, itemsPerPage);
      dispatch(setTags(resTags));
    })();
  }, [currentPage, itemsPerPage]);

  const sorted = [...tags].sort((a, b) =>
    compare(a[sortBy], b[sortBy], sorting)
  );

  return (
    <div>
      {sorted.map((el) => (
        <div>
          <p>{el.name}</p>
          <p>{el.popular}</p>
        </div>
      ))}
    </div>
  );
};
export default TagList;
