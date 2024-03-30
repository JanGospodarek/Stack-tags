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
import { setItemsPerPage, setSortBy, setSortingType } from "../store/listSlice";

const fields = ["popularity", "name"];

const Filtering = () => {
  const dispatch = useAppDispatch();
  const itemsPerPage = useAppSelector((state) => state.list.itemsPerPage);
  const sortBy = useAppSelector((state) => state.list.sortBy);
  const sorting = useAppSelector((state) => state.list.sorting);
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
    dispatch(setItemsPerPage(parsedValue));
  };
  return (
    <>
      <div className="w-1/2 gap-4  px-8 hidden md:flex">
        <div className="flex items-center gap-2">
          <p className="whitespace-nowrap text-white/40">Per page</p>
          <Input
            type="number"
            variant="bordered"
            min={10}
            max={80}
            step={10}
            value={String(itemsPerPage)}
            onChange={handleItemsPerPageChange}
            className="w-16"
            color={error ? "danger" : "primary"}
          ></Input>
        </div>
        <div className="flex items-center gap-2">
          <p className="whitespace-nowrap text-white/40">Sort by:</p>
          <Select
            items={fields}
            placeholder="Sort by"
            className="w-[100px] "
            variant="bordered"
            selectedKeys={[sortBy]}
            onChange={(e) => dispatch(setSortBy(e.target.value))}
          >
            {fields.map((field) => (
              <SelectItem key={field}>{field}</SelectItem>
            ))}
          </Select>
          <Switch
            defaultSelected
            size="lg"
            color="secondary"
            isSelected={sorting === "desc"}
            onValueChange={(e) => dispatch(setSortingType(e ? "desc" : "asc"))}
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <ArrowCircleDown size={32} className={className} />
              ) : (
                <ArrowCircleUp size={32} className={className} />
              )
            }
          >
            {sorting[0].toUpperCase() + sorting.slice(1)}
          </Switch>
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
            </DropdownItem>
          </DropdownSection>
          <DropdownSection title="Sorting">
            <DropdownItem className="flex gap-2">
              {fields.map((field) => (
                <Button
                  size="sm"
                  className="mx-1"
                  onClick={() => dispatch(setSortBy(field))}
                  color={sortBy === field ? "secondary" : "default"}
                >
                  {field}
                </Button>
              ))}
            </DropdownItem>
            <DropdownItem>
              <Switch
                defaultSelected
                size="lg"
                color="secondary"
                isSelected={sorting === "desc"}
                onValueChange={(e) =>
                  dispatch(setSortingType(e ? "desc" : "asc"))
                }
                thumbIcon={({ isSelected, className }) =>
                  isSelected ? (
                    <ArrowCircleDown size={32} className={className} />
                  ) : (
                    <ArrowCircleUp size={32} className={className} />
                  )
                }
              >
                {sorting[0].toUpperCase() + sorting.slice(1)}
              </Switch>
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};
export default Filtering;
