import { Input } from "@nextui-org/react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setItemsPerPage } from "../../../store/listSlice";
interface Props {
  resetTags: () => void;
}
const SortingNumberInput = ({ resetTags }: Props) => {
  const dispatch = useAppDispatch();

  const itemsPerPage = useAppSelector((state) => state.list.itemsPerPage);
  const [error, setError] = useState<boolean>(false);

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value === "") {
      setError(true);
      return;
    }
    const parsedValue = parseInt(value);
    if (parsedValue < 10 || parsedValue > 100) {
      setError(true);
      return;
    }
    setError(false);
    resetTags();
    dispatch(setItemsPerPage(parsedValue));
  };
  return (
    <Input
      type="number"
      variant="bordered"
      min={10}
      max={80}
      step={10}
      value={String(itemsPerPage)}
      onChange={handleItemsPerPageChange}
      className="w-16 text-white"
      color={error ? "danger" : "default"}
    ></Input>
  );
};

export default SortingNumberInput;
