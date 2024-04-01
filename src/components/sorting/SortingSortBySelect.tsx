import { Button, Select, SelectItem } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSortBy } from "../../store/listSlice";

interface Props {
  device: "small" | "large";
  resetTags: () => void;
  fields: string[];
}
const SortingSortBySelect = ({ device, resetTags, fields }: Props) => {
  const dispatch = useAppDispatch();
  const sortBy = useAppSelector((state) => state.list.sortBy);

  const handleSortBySelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    resetTags();
    dispatch(setSortBy(e.target.value));
  };
  if (device === "small")
    return (
      <>
        {fields.map((field) => (
          <Button
            key={field}
            size="sm"
            className="mx-1"
            onClick={() =>
              sortBy !== field &&
              handleSortBySelectChange({
                target: { value: field },
              } as any)
            }
            color={sortBy === field ? "secondary" : "default"}
          >
            {field}
          </Button>
        ))}
      </>
    );
  else
    return (
      <Select
        items={fields}
        placeholder="Sort by"
        className="w-[100px]"
        variant="bordered"
        selectedKeys={[sortBy]}
        onChange={handleSortBySelectChange}
      >
        {fields.map((field) => (
          <SelectItem key={field}>{field}</SelectItem>
        ))}
      </Select>
    );
};
export default SortingSortBySelect;
