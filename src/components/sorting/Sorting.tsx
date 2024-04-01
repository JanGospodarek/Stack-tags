import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { useAppDispatch } from "../../store/hooks";
import { resetTags, setPageNumber } from "../../store/listSlice";
import SortingSwitch from "./SortingSwitch";
import SortingNumberInput from "./SortingNumberInput";
import SortingSortBySelect from "./SortingSortBySelect";

const fields = ["popularity", "name"];

const Sorting = () => {
  const dispatch = useAppDispatch();

  const reset = () => {
    dispatch(resetTags());
    dispatch(setPageNumber(1));
  };

  return (
    <>
      {/* big devices */}
      <div className="w-1/2 gap-4  px-8  hidden md:flex">
        <div className="flex items-center gap-2">
          <p className="whitespace-nowrap dark:text-white/40">Per page</p>
          <SortingNumberInput resetTags={reset} />
        </div>
        <div className="flex items-center gap-2">
          <p className="whitespace-nowrap dark:text-white/40">Sort by:</p>
          <SortingSortBySelect
            device="large"
            resetTags={reset}
            fields={fields}
          />
          <SortingSwitch resetTags={reset} />
        </div>
        <div className="flex items-center gap-2"></div>
      </div>
      {/* Small devices */}
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
              <SortingNumberInput resetTags={reset} />
            </DropdownItem>
          </DropdownSection>
          <DropdownSection title="Sorting">
            <DropdownItem className="flex gap-2">
              <SortingSortBySelect
                device="small"
                resetTags={reset}
                fields={fields}
              />
            </DropdownItem>
            <DropdownItem>
              <SortingSwitch resetTags={reset} />
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};
export default Sorting;
