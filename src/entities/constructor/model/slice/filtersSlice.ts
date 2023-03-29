import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFiltersIngredients} from "../../../../widgets/ConstructorCard/model/types/types";

interface IFilters {
  filters: IFiltersIngredients[];
}

const initialState: IFilters = {
  filters: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    getFilters: (state, action: PayloadAction<IFiltersIngredients[]>) => {
      state.filters = action.payload;
    }
  }
});

export const {
  getFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
