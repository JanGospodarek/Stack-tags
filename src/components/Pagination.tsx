import { Button, Pagination } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setPageNumber } from "../store/listSlice";
import { useEffect, useState } from "react";
const PagesNav = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.list.page);
  const hasMore = useAppSelector((state) => state.list.hasMore);
  const [currPage, setCurrentPage] = useState(currentPage);
  useEffect(() => {
    dispatch(setPageNumber(currPage));
  }, [currPage]);
  return (
    <div className="p-b-8 w-full flex justify-center items-center h-20">
      {/* <Pagination
        total={Math.ceil(totalItemsAmount / itemsPerPage)}
        initialPage={1}
        color="secondary"
        variant="bordered"
        page={currentPage}
        onChange={(e) => dispatch(setPageNumber(e))}
      /> */}
      <Button
        size="sm"
        variant="flat"
        color="secondary"
        onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
      >
        Previous
      </Button>
      <Button
        size="sm"
        variant="flat"
        color="secondary"
        disabled={!hasMore}
        onPress={() => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}
      >
        Next
      </Button>
    </div>
  );
};
export default PagesNav;
