import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { getNewsArray } from "features/news/model/slice/newsReducer";

import { NEWS_URL } from "shared/assets/constants/constants";

export const fetchNews = createAsyncThunk(NEWS_URL, async (data: any) => {
  const {dispatch, limit} = data;
  const response = await axios.get(`${NEWS_URL}?_limit=${limit}`);

  dispatch(getNewsArray(response.data));
});
