import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "../../../../shared";
import {RESTAURANT_FILTERS_URL} from "../../../../shared/assets/constants/constants";
import axios from "axios";
import {ResponseApiIngredients} from "../../../basket/model/types/basketTypes";
import {IFiltersIngredients} from "../../../../widgets/ConstructorCard/model/types/types";
import {getFilters} from "../slice/filtersSlice";

export const fetchFilters = createAsyncThunk<void, void, ThunkConfig<void>>(RESTAURANT_FILTERS_URL, async (_, thunkAPI) => {
  try {
    const response = await axios.get<IFiltersIngredients[] ,ResponseApiIngredients>(RESTAURANT_FILTERS_URL);
    thunkAPI.dispatch(getFilters(response.data))
  } catch (error) {
    console.log(error);
  }
});
