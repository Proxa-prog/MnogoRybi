import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IIngredients, IPokeIngredients } from "../types/productionTypes";

const initialState: IIngredients = {
  pokeIngredients: {
    basis: {},
    protein: {},
    sauce: {},
    productsType: {},
    topping: {},
    crunch: {},
    additionally: {},
    fillers: {},
  },
};

export const pokeIngredientsSlice = createSlice({
  name: 'pokeIngredients',
  initialState,
  reducers: {
    getIngredients: (state, action: PayloadAction<IPokeIngredients>) => {
      state.pokeIngredients = { ...action.payload };
    },
  },
});

export const {
  reducer: pokeIngredientsReducer,
  actions: pokeIngredientsActions,
} = pokeIngredientsSlice;
