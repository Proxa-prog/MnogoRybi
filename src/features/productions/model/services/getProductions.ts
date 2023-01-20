import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { getProductionsAction } from "features/productions";

import { POKE_URL } from "shared";

export const fetchProductions = createAsyncThunk(POKE_URL, async (_, thunkAPI) => {
  const response = await axios.get(POKE_URL);
  thunkAPI.dispatch(getProductionsAction(response.data));
});
