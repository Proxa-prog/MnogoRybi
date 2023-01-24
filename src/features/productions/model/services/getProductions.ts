import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ResponseApiProductions } from "entities/basket";

import { getProductionsAction } from "features/productions";


import { POKE_URL } from "shared";

export const fetchProductions = createAsyncThunk<void, undefined, {}>(POKE_URL, async (_, thunkAPI) => {
  const response = await axios.get<string, ResponseApiProductions>(POKE_URL);
  thunkAPI.dispatch(getProductionsAction(response.data));
});
