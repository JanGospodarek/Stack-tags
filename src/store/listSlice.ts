import { createSlice } from "@reduxjs/toolkit";
import { Tag, initialStateType } from "./types";

const initialState: initialStateType = {
  tags: [],
  page: 1,
  itemsPerPage: 30,
  sorting: "desc",
  sortBy: "name",
  hasMore: true,
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setTags: (state, action) => {
      state.hasMore = action.payload.hasMore;
      state.tags = [
        ...state.tags,
        ...action.payload.tags
          .map((el: any) => ({
            name: el.name,
            popularity: el.count,
            hasSynonyms: el.has_synonyms,
            isRequired: el.is_moderator_only,
            page: state.page,
          }))
          .filter(
            (el: Tag) =>
              state.tags.findIndex(
                (tag) =>
                  tag.name === el.name && el.popularity === tag.popularity
              ) === -1
          ),
      ];
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
    setHasMore: (state, action) => {
      state.hasMore = action.payload;
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
  setHasMore,
} = listSlice.actions;

export default listSlice.reducer;
