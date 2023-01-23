import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { getNewsArray } from "features/news/model/slice/newsReducer";

import { NEWS_URL } from "shared";

export const fetchNews = createAsyncThunk(NEWS_URL, async (limit: any, thunkAPI) => {
  const response = await axios.get(`${NEWS_URL}?_limit=${limit}`);

  thunkAPI.dispatch(getNewsArray(response.data));
});
