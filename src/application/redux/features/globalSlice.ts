import { createSlice } from "@reduxjs/toolkit";

interface Props {
  reset: number;
}

const initialState: Props = {
  reset: 0,
};

export const globalSlice = createSlice({
  name: "drawerForm",
  initialState,
  reducers: {
    globalReset: (state) => {
      state.reset = state.reset + 1;
    },
  },
});

export const { globalReset } = globalSlice.actions;

export default globalSlice.reducer;
