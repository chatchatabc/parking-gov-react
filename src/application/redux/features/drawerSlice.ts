import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Props {
  show: boolean;
  buttonText?: string;
  data?: Record<string, any>;
  content?: string;
  title?: string;
}

const initialState: Props = {
  show: false,
};

export const drawerSlice = createSlice({
  name: "drawerForm",
  initialState,
  reducers: {
    drawerUpdate: (state, action: PayloadAction<Props>) => {
      state.show = action.payload.show;
      state.data = action.payload.data;
      state.title = action.payload.title ?? "Drawer Form";
      state.content = action.payload.content ?? "Drawer Content";
      state.buttonText = action.payload.buttonText;
    },
  },
});

export const { drawerUpdate } = drawerSlice.actions;

export default drawerSlice.reducer;
