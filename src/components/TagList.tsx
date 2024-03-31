import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import fetchTags from "../utils/fetchTags";
import { setTags } from "../store/listSlice";
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

  useEffect(() => {
    (async () => {
      if (tags.findIndex((tag) => tag.page === currentPage) !== -1) return;
      try {
        setLoading(true);
        const [resTags, hasMore] = await fetchTags(
          currentPage,
          itemsPerPage,
          sorting,
          sortBy
        );

        dispatch(setTags({ tags: resTags, hasMore }));

        setLoading(false);
      } catch (error: any) {
        setError(error.message);
      }
    })();
  }, [currentPage, sortBy, sorting, itemsPerPage]);

  return (
    <div
      className={`overflow-y-scroll h-[100%] w-[100%] px-8 mt-8 flex sm:flex-wrap gap-4  flex-col sm:flex-row ${
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
