import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoriesState {
  main: string;
  second: string;
  third: string;
}

const initialState: CategoriesState = {
  main: "",
  second: "",
  third: "",
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    selectCategory: (
      state,
      action: PayloadAction<CategoriesState>
    ) => {
      return { ...state, ...action.payload };
    },
  },
});

export default categoriesSlice.reducer;
export const { selectCategory } = categoriesSlice.actions;
