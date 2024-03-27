import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {}

const initialState: initialStateType = {};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
});

export const {} = listSlice.actions;

export default listSlice.reducer;
