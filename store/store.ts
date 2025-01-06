import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categories.slice";
import attributesReducer from "./slices/attributes.slice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    attributes: attributesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
