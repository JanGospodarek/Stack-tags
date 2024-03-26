import { useState } from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";
const fields = ["count", "name"];
const Filtering = () => {
  const [numberPerPage, setNumberPerPage] = useState(30);
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
          label="Favorite Animal"
          placeholder="Select an animal"
          className="max-w-xs"
        >
          {(field) => <SelectItem key={field}>{field}</SelectItem>}
        </Select>
      </div>
      <div className="flex items-center gap-2"></div>
    </div>
  );
};
export default Filtering;
