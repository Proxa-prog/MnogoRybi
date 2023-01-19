import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { getProductionsAction } from "features/productions";

import { POKE_URL } from "shared";

export const fetchProductions = createAsyncThunk(POKE_URL, async (dispatch: any) => {
  const response = await axios.get(POKE_URL);
  dispatch(getProductionsAction(response.data));
});
