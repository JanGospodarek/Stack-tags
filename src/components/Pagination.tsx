import { Button, Pagination } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setPageNumber } from "../store/listSlice";
import { useEffect, useState } from "react";
const PagesNav = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.list.page);
  const hasMore = useAppSelector((state) => state.list.hasMore);
  const handleNextPage = (type: "next" | "prev") => {
    if (type === "next" && hasMore) {
      dispatch(setPageNumber(currentPage + 1));
    } else if (type === "prev" && currentPage > 1) {
      dispatch(setPageNumber(currentPage - 1));
    }
  };
  return (
    <div className="p-b-8 w-full flex justify-center items-center h-20 gap-6">
      <Button
        variant={currentPage === 1 ? "flat" : "shadow"}
        color="secondary"
        onPress={() => handleNextPage("prev")}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      <div className="border-2 border-secondary-300 bg-secondary-100 w-[30px] h-[30px] flex justify-center items-center  rounded-[100%]">
        {currentPage}
      </div>
      <Button
        variant={hasMore ? "shadow" : "flat"}
        color="secondary"
        disabled={!hasMore}
        onPress={() => handleNextPage("next")}
      >
        Next
      </Button>
    </div>
  );
};
export default PagesNav;
