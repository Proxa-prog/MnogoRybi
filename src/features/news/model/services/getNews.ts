import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { getNewsArray } from "features/news";

import { ResponseApiNews } from "entities/basket/model/types/basketTypes";

import { NEWS_URL } from "shared";

export const fetchNews = createAsyncThunk<void, number, {}>(NEWS_URL, async (limit: number, thunkAPI) => {
  const response = await axios.get<string, ResponseApiNews>(`${NEWS_URL}?_limit=${limit}`);

  thunkAPI.dispatch(getNewsArray(response.data));
});
