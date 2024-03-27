import { createSlice } from "@reduxjs/toolkit";

export type Tag = {
  name: string;
  popularity: number;
  hasSynonyms: boolean;
  isRequired: boolean;
  page: number;
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
      state.tags = [
        ...state.tags,
        ...action.payload
          .map((el: any) => ({
            name: el.name,
            popularity: el.count,
            hasSynonyms: el.has_synonyms,
            isRequired: el.is_moderator_only,
            page: state.page,
          }))
          .filter(
            (el: Tag) =>
              state.tags.findIndex((tag) => tag.name === el.name) === -1
          ),
      ];
      console.log("state.tags", state.tags);
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
    resetTags: (state) => {
      state.tags = [];
    },
  },
});

export const {
  setTags,
  setItemsPerPage,
  setPageNumber,
  setSortBy,
  setSortingType,
  resetTags,
} = listSlice.actions;

export default listSlice.reducer;
