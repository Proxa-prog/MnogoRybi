import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ResponseApiProductions } from "entities/basket";

import { getProductionsAction } from "features/productions";


import { POKE_URL, ThunkConfig } from "shared";

export const fetchProductions = createAsyncThunk<void, void, ThunkConfig<void>>(POKE_URL, async (_, thunkAPI) => {
  try {
    const response = await axios.get<string, ResponseApiProductions>(POKE_URL);
    thunkAPI.dispatch(getProductionsAction(response.data));
  } catch (error) {
    console.error(error)
  }
});
