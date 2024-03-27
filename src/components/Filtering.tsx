import { useState } from "react";
import { Input, Select, SelectItem, Switch } from "@nextui-org/react";
import { ArrowCircleDown, ArrowCircleUp } from "@phosphor-icons/react";
const fields = ["none", "count", "name"];
const Filtering = () => {
  const [numberPerPage, setNumberPerPage] = useState(30);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="w-1/2 flex gap-4  px-8">
      <div className="flex items-center gap-2">
        <p className="whitespace-nowrap text-white/40">Per page</p>
        <Input
          type="number"
          variant="bordered"
          min={10}
          max={80}
          step={10}
          value={String(numberPerPage)}
          onChange={(e) => setNumberPerPage(parseInt(e.target.value))}
          className="w-16"
        ></Input>
      </div>
      <div className="flex items-center gap-2">
        <p className="whitespace-nowrap text-white/40">Sort by:</p>
        <Select
          items={fields}
          placeholder="Sort by"
          className="w-[100px] dark"
          variant="bordered"
        >
          {fields.map((field) => (
            <SelectItem key={field}>{field}</SelectItem>
          ))}
        </Select>
        <Switch
          defaultSelected
          size="lg"
          color="secondary"
          isSelected={isSelected}
          onValueChange={setIsSelected}
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <ArrowCircleDown size={32} className={className} />
            ) : (
              <ArrowCircleUp size={32} className={className} />
            )
          }
        >
          {isSelected ? "Desc" : "Asc"}
        </Switch>
      </div>
      <div className="flex items-center gap-2"></div>
    </div>
  );
};
export default Filtering;
