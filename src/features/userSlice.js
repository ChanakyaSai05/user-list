import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUsers: (state, action) => {
      state = [...state, action.payload];
      return state;
    },
    deleteUsers: (state, action) => {
      let newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    },
    emptyUsers: () => {
      return [];
    },
  },
});
export const { addUsers, deleteUsers, emptyUsers } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
