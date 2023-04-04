import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IFiltersIngredients } from 'widgets/ConstructorCard';

import { ResponseApiIngredients } from 'entities/basket';
import { filtersActions } from 'entities/constructor';

import { ThunkConfig, RESTAURANT_FILTERS_URL } from 'shared';

export const fetchFilters = createAsyncThunk<void, void, ThunkConfig<void>>(
  'filters/fetchFilters',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IFiltersIngredients[], ResponseApiIngredients>(
        RESTAURANT_FILTERS_URL
      );
      thunkAPI.dispatch(filtersActions.getFilters(response.data));
    } catch (error) {
      console.log(error);
    }
  }
);
