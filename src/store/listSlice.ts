import { createSlice } from "@reduxjs/toolkit";

export type Tag = {
  name: string;
  popularity: number;
  hasSynonyms: boolean;
  isRequired: boolean;
};

interface initialStateType {
  tags: Tag[];
  page: number;
  itemsPerPage: number;
  sorting: "desc" | "asc";
  sortBy: "popularity" | "name";
}

const initialState: initialStateType = {
  tags: [],
  page: 1,
  itemsPerPage: 30,
  sorting: "desc",
  sortBy: "name",
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setTags: (state, action) => {
      console.log(action.payload);
      state.tags = action.payload.map((el: any) => ({
        name: el.name,
        popularity: el.count,
        hasSynonyms: el.has_synonyms,
        isRequired: el.is_moderator_only,
      }));
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSortingType: (state, action) => {
      state.sorting = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
    setPageNumber: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const {
  setTags,
  setItemsPerPage,
  setPageNumber,
  setSortBy,
  setSortingType,
} = listSlice.actions;

export default listSlice.reducer;
