const fetchTags = async (page: number, itemsPerPage: number) => {
  const res = await fetch(
    `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${itemsPerPage}&site=stackoverflow`
  );
  const data = await res.json();
  return data.items;
};
export default fetchTags;
