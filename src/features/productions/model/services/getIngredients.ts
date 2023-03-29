import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig, RESTAURANT_INGREDIENTS_URL} from "shared";
import axios from "axios";
import {ResponseApiIngredients} from "../../../../entities/basket/model/types/basketTypes";
import {getIngredients} from "../slice/pokeIngredientsSlice";

export const fetchIngredients = createAsyncThunk<void, void, ThunkConfig<void>>(RESTAURANT_INGREDIENTS_URL, async (_, thunkAPI) => {
  try {
    const response = await axios.get<string, ResponseApiIngredients>(RESTAURANT_INGREDIENTS_URL);
    thunkAPI.dispatch(getIngredients(response.data));
  } catch (error) {
    console.error(error);
  }
});
