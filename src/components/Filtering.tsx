import { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Input,
  Select,
  SelectItem,
  Switch,
} from "@nextui-org/react";
import { ArrowCircleDown, ArrowCircleUp } from "@phosphor-icons/react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  resetTags,
  setItemsPerPage,
  setPageNumber,
  setSortBy,
  setSortingType,
} from "../store/listSlice";
import CustomSwitch from "./ui/filtering/SortingSwitch";
import SortingNumberInput from "./ui/filtering/SortingNumberInput";

const fields = ["popularity", "name"];

const Filtering = () => {
  const dispatch = useAppDispatch();
  const itemsPerPage = useAppSelector((state) => state.list.itemsPerPage);
  const sortBy = useAppSelector((state) => state.list.sortBy);
  const sorting = useAppSelector((state) => state.list.sorting);
  const [numberInputError, setNumberInputError] = useState<boolean>(false);

  const reset = () => {
    dispatch(resetTags());
    dispatch(setPageNumber(1));
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value === "") {
      setNumberInputError(true);
      return;
    }
    const parsedValue = parseInt(value);
    if (parsedValue < 10 || parsedValue > 100) {
      setNumberInputError(true);
      return;
    }
    setNumberInputError(false);
    reset();
    dispatch(setItemsPerPage(parsedValue));
  };

  const handleSortBySelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    reset();
    dispatch(setSortBy(e.target.value));
  };

  const handleSortingTypeChange = (value: boolean) => {
    reset();
    dispatch(setSortingType(value ? "desc" : "asc"));
  };
  return (
    <>
      <div className="w-1/2 gap-4  px-8  hidden md:flex">
        <div className="flex items-center gap-2">
          <p className="whitespace-nowrap text-white/40">Per page</p>
          <SortingNumberInput
            itemsPerPage={itemsPerPage}
            error={numberInputError}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        </div>
        <div className="flex items-center gap-2">
          <p className="whitespace-nowrap text-white/40">Sort by:</p>
          <Select
            items={fields}
            placeholder="Sort by"
            className="w-[100px] "
            variant="bordered"
            selectedKeys={[sortBy]}
            onChange={handleSortBySelectChange}
          >
            {fields.map((field) => (
              <SelectItem key={field}>{field}</SelectItem>
            ))}
          </Select>
          <CustomSwitch
            sorting={sorting}
            onSwitchChange={handleSortingTypeChange}
          />
        </div>
        <div className="flex items-center gap-2"></div>
      </div>

      <Dropdown backdrop="blur" closeOnSelect={false} className="dark">
        <DropdownTrigger>
          <Button
            variant="flat"
            color="secondary"
            className="mx-8 visible md:hidden"
          >
            Sorting
          </Button>
        </DropdownTrigger>
        <DropdownMenu variant="faded" aria-label="Static Actions">
          <DropdownSection title="Amount of items" showDivider>
            <DropdownItem isReadOnly={true}>
              <SortingNumberInput
                error={numberInputError}
                itemsPerPage={itemsPerPage}
                onItemsPerPageChange={handleItemsPerPageChange}
              />
            </DropdownItem>
          </DropdownSection>
          <DropdownSection title="Sorting">
            <DropdownItem className="flex gap-2">
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
            </DropdownItem>
            <DropdownItem>
              <CustomSwitch
                sorting={sorting}
                onSwitchChange={handleSortingTypeChange}
              />
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};
export default Filtering;
