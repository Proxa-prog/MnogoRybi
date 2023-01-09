import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { getNewsArray } from "app/store/reducers/news";

import { NEWS_URL } from "entities/constants/constants";

export const fetchNews = createAsyncThunk(NEWS_URL, async (data: any) => {
  const {dispatch, limit} = data;
  const response = await axios.get(`${NEWS_URL}?_limit=${limit}`);

  dispatch(getNewsArray(response.data));
});
