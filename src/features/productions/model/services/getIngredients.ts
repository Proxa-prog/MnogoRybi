import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ThunkConfig, RESTAURANT_INGREDIENTS_URL } from 'shared';

import { ResponseApiIngredients } from 'entities/basket';
import { pokeIngredientsActions } from 'features/productions';

export const fetchIngredients = createAsyncThunk<void, void, ThunkConfig<void>>(
  RESTAURANT_INGREDIENTS_URL,
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<string, ResponseApiIngredients>(
        RESTAURANT_INGREDIENTS_URL
      );
      thunkAPI.dispatch(pokeIngredientsActions.getIngredients(response.data));
    } catch (error) {
      console.error(error);
    }
  }
);
