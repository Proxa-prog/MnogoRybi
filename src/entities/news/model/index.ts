import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const news = (state: RootState) => state.news.news;

export const getNews = createSelector(
  [ news ],
  (allnews) => {

    return allnews;
  }
);
