import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFiltersIngredients } from 'widgets/ConstructorCard';

interface IFilters {
  filters: IFiltersIngredients[];
}

const initialState: IFilters = {
  filters: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    getFilters: (state, action: PayloadAction<IFiltersIngredients[]>) => {
      state.filters = action.payload;
    },
  },
});

export const {
  reducer: filtersReducer,
  actions: filtersActions
} = filtersSlice;
