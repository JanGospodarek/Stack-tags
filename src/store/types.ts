export type Tag = {
  name: string;
  popularity: number;
  hasSynonyms: boolean;
  isRequired: boolean;
  page: number;
};

export interface initialStateType {
  tags: Tag[];
  page: number;
  itemsPerPage: number;
  hasMore: boolean;
  sorting: "desc" | "asc";
  sortBy: "popularity" | "name";
}
