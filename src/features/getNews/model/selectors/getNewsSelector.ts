import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "app/store";

const getNews = (state: RootState) => state.news.news;

export const getNewsSelector = createSelector(
  [ getNews ],
  (allNews) => {

    return allNews;
  }
);
