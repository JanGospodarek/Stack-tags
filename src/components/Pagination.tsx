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
    console.log(hasMore);
  }, [hasMore]);
  useEffect(() => {
    dispatch(setPageNumber(currPage));
  }, [currPage]);
  return (
    <div className="p-b-8 w-full flex justify-center items-center h-20 gap-6">
      {/* <Pagination
        total={Math.ceil(totalItemsAmount / itemsPerPage)}
        initialPage={1}
        color="secondary"
        variant="bordered"
        page={currentPage}
        onChange={(e) => dispatch(setPageNumber(e))}
      /> */}
      <Button
        variant="flat"
        color="secondary"
        onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
      >
        Previous
      </Button>
      <div className="border-2 border-secondary-300 bg-secondary-100 w-[30px] h-[30px] flex justify-center items-center  rounded-[100%]">
        {currPage}
      </div>
      <Button
        variant="flat"
        color="secondary"
        disabled={!hasMore}
        onPress={() => setCurrentPage((prev) => (hasMore ? prev + 1 : prev))}
      >
        Next
      </Button>
    </div>
  );
};
export default PagesNav;
