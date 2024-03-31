import { Input } from "@nextui-org/react";
interface Props {
  itemsPerPage: number;
  error: boolean;
  onItemsPerPageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SortingNumberInput = ({
  itemsPerPage,
  error,
  onItemsPerPageChange,
}: Props) => (
  <Input
    type="number"
    variant="bordered"
    min={10}
    max={80}
    step={10}
    value={String(itemsPerPage)}
    onChange={onItemsPerPageChange}
    className="w-16 text-white"
    color={error ? "danger" : "default"}
  ></Input>
);

export default SortingNumberInput;
