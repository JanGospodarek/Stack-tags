import { createSlice } from "@reduxjs/toolkit";
type Tag = {
  name: string;
  count: number;
};
interface initialStateType {
  tags: Tag[];
  sortedTags: Tag[];
  page: number;
  itemsPerPage: number;
}

const initialState: initialStateType = {
  tags: [],
  sortedTags: [],
  page: 1,
  itemsPerPage: 30,
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setTags: (state, action) => {
      state.tags = action.payload;
    },
  },
});

export const { setTags } = listSlice.actions;

export default listSlice.reducer;
