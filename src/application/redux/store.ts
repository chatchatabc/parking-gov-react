import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./features/drawerSlice";
import globalReducer from "./features/globalSlice";
// ...

const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    global: globalReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
