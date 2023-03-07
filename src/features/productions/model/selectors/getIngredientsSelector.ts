import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const ingredients = (state: RootState) => state.ingredients.pokeIngredients;

export const getIngredientsSelector = createSelector(
  [ ingredients ],
  (allIngredients) => {

    return allIngredients;
  }
);
