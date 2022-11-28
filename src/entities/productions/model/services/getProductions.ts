import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductionsAction } from "app/store/reducers/productions";
import axios from "axios";
import { POKE_URL } from "entities/constants/constants";

export const fetchProductions = createAsyncThunk(POKE_URL, async (dispatch: any) => {
  const response = await axios.get(POKE_URL);
  dispatch(getProductionsAction(response.data));
});
