import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const news = (state: RootState) => state.news.news;

export const getNewsSelector = createSelector(
  [ news ],
  (allnews) => {

    return allnews;
  }
);
