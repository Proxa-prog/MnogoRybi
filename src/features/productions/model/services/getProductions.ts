import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { getProductionsAction } from "features/productions/model/slice/productionsReducer";

import { POKE_URL } from "entities/constants/constants";

export const fetchProductions = createAsyncThunk(POKE_URL, async (dispatch: any) => {
  const response = await axios.get(POKE_URL);
  dispatch(getProductionsAction(response.data));
});
