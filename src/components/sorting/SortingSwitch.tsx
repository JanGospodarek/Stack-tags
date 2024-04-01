import { Switch } from "@nextui-org/react";
import { setSortingType } from "../../store/listSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ArrowCircleDown, ArrowCircleUp } from "@phosphor-icons/react";
interface Props {
  resetTags: () => void;
}
const CustomSwitch = ({ resetTags }: Props) => {
  const sorting = useAppSelector((state) => state.list.sorting);
  const dispatch = useAppDispatch();

  const onSwitchChange = (value: boolean) => {
    resetTags();
    dispatch(setSortingType(value ? "desc" : "asc"));
  };

  return (
    <Switch
      defaultSelected
      size="lg"
      color="secondary"
      isSelected={sorting === "desc"}
      onValueChange={onSwitchChange}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <ArrowCircleDown size={32} className={className} />
        ) : (
          <ArrowCircleUp size={32} className={className} />
        )
      }
    >
      <span className="text-sm dark:text-default-400">
        {sorting[0].toUpperCase() + sorting.slice(1)}
      </span>
    </Switch>
  );
};

export default CustomSwitch;
