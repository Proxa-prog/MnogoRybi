import { createSlice } from "@reduxjs/toolkit";
import { StatusMarkerProps } from "shared/ui/StatusMarker/StatusMarker";

export interface INews {
  header: string;
  description?: string;
  date?: string;
  imageUrl?: string;
  statuses?: StatusMarkerProps[];
  id: string;
  text?: string;
}

const initialState = {
  news: {
    limit: 3,
    newsArray: []
  },
}

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getNewsArray: (state, action) => {
      state.news.newsArray = action.payload;
    },
    addLimit: (state, action) => {
      state.news.limit = state.news.limit + action.payload;
    }
  }
});

export const { getNewsArray, addLimit } = newsSlice.actions;

export default newsSlice.reducer;
