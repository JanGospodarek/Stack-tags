import { Pagination } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setPageNumber } from "../store/listSlice";
const PagesNav = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.list.page);
  return (
    <div className="p-b-8 w-full flex justify-center items-center">
      <Pagination
        total={10}
        initialPage={1}
        color="secondary"
        variant="bordered"
        page={currentPage}
        onChange={(e) => dispatch(setPageNumber(e))}
      />
    </div>
  );
};
export default PagesNav;
