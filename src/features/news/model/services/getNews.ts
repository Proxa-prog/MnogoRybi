import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { getNewsArray } from "features/news";

import { ResponseApiNews } from "entities/basket/model/types/basketTypes";

import { NEWS_URL, ThunkConfig } from "shared";

export const fetchNews = createAsyncThunk<void, number, ThunkConfig<void>>(NEWS_URL, async (limit: number, thunkAPI) => {
  try {
    const response = await axios.get<string, ResponseApiNews>(`${NEWS_URL}?_limit=${limit}`);

    thunkAPI.dispatch(getNewsArray(response.data));
  } catch (error) {
    console.error(error)
  }
});
