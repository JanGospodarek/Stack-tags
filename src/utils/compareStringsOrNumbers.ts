const compare = (
  a: string | number,
  b: string | number,
  sorting: "asc" | "desc"
) => {
  if (typeof a === "string") {
    if (sorting === "asc") return a < b ? -1 : a > b ? 1 : 0;
    else return a < b ? 1 : a > b ? -1 : 0;
  } else {
    if (sorting === "asc") return a - (b as number);
    else return (b as number) - a;
  }
};
export default compare;
