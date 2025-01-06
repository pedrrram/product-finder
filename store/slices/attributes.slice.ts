import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AttributesState {
  selected: string[] | [];
}

const initialState: AttributesState = {
  selected: [],
};

export const attributesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    selectAttribute: (
      state,
      {
        payload,
      }: PayloadAction<{
        index: number;
        value: string;
      }>
    ) => {
      const newSelected = [...state.selected];
      newSelected[payload.index] = payload.value;
      state.selected = newSelected;
    },
    clearAttributes: (state) => {
      state.selected = [];
    },
  },
});

export default attributesSlice.reducer;
export const { selectAttribute, clearAttributes } = attributesSlice.actions;
