import { Switch } from "@nextui-org/react";
import { setSortingType } from "../../../store/listSlice";
import { useAppDispatch } from "../../../store/hooks";
import { ArrowCircleDown, ArrowCircleUp } from "@phosphor-icons/react";
interface Props {
  sorting: "desc" | "asc";
  onSwitchChange: (e: boolean) => void;
}
const CustomSwitch = ({ sorting, onSwitchChange }: Props) => (
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
    {sorting[0].toUpperCase() + sorting.slice(1)}
  </Switch>
);

export default CustomSwitch;
