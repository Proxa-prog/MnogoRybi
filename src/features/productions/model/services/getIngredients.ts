import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { pokeIngredientsActions, ResponseApiIngredients } from 'features/productions';

import { ThunkConfig, RESTAURANT_INGREDIENTS_URL } from 'shared';

export const fetchIngredients = createAsyncThunk<void, void, ThunkConfig<void>>(
  'pokeIngredients/fetchIngredients',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<string, ResponseApiIngredients>(
        RESTAURANT_INGREDIENTS_URL
      );
      console.log(response.data)
      thunkAPI.dispatch(pokeIngredientsActions.getIngredients(response.data));
    } catch (error) {
      console.error(error);
    }
  }
);
