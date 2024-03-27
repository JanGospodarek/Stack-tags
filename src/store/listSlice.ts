import { createSlice } from "@reduxjs/toolkit";
type Tag = {
  name: string;
  popular: number;
};
interface initialStateType {
  tags: Tag[];
  page: number;
  itemsPerPage: number;
  sorting: "desc" | "asc";
  sortBy: "popular" | "name";
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
      state.tags = action.payload;
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
