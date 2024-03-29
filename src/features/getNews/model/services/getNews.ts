import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { newsActions, ResponseApiNews } from 'features/getNews';

import { NEWS_URL, ThunkConfig } from 'shared';

export const fetchNews = createAsyncThunk<void, number, ThunkConfig<void>>(
  'News/fetchNews',
  async (limit: number, thunkAPI) => {
    try {
      const response = await axios.get<string, ResponseApiNews>(`${NEWS_URL}?_limit=${limit}`);

      thunkAPI.dispatch(newsActions.getNewsArray(response.data));
    } catch (error) {
      console.error(error);
    }
  }
);
