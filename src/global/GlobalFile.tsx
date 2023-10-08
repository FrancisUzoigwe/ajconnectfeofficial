import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {} || null,
  toggle: false,
};

const GlobalFile = createSlice({
  name: "state",
  initialState,
  reducers: {
    userState: (state, { payload }) => {
      state.user = payload;
    },
    logOut: (state) => {
      state.user = null;
    },
    toggleState: (state: any) => {
      state.toggle = true;
    },
    changedToggle: (state: any) => {
      state.toggle = false
    }
  },
});

export const { userState, logOut, toggleState, changedToggle } = GlobalFile.actions;

export default GlobalFile.reducer;
