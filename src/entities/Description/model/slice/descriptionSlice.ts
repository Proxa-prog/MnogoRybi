import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DescriprionsArray, IDescription } from "../types/descriptionsTypes";

const initialState: DescriprionsArray =  {
  descriptions: [],
};

export const descriptionSlice = createSlice({
  name: 'descriptions',
  initialState,
  reducers: {
    changeDescription: (state, action: PayloadAction<IDescription[]>) => {
      state.descriptions = action.payload
    },
  },
});

export const { changeDescription } = descriptionSlice.actions;

export default descriptionSlice.reducer;
