import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CheckboxListWrapperProps} from "../../../../widgets/ConstructorCard/ui/CheckboxListWrapper/CheckboxListWrapper";

interface  IPokeIngredients {
  basis: CheckboxListWrapperProps,
  protein: CheckboxListWrapperProps,
  sauce: CheckboxListWrapperProps,
  productsType: CheckboxListWrapperProps,
  topping: CheckboxListWrapperProps,
  crunch: CheckboxListWrapperProps,
  additionally: CheckboxListWrapperProps,
  fillers: CheckboxListWrapperProps,
}

interface  IIngredients {
  pokeIngredients: IPokeIngredients;
}

const initialState = {
  pokeIngredients: {
    basis: {},
    protein: {},
    sauce: {},
    productsType: {},
    topping: {},
    crunch: {},
    additionally: {},
    fillers: {},
  }
};

export const pokeIngredientsSlice = createSlice({
    name: "pokeIngredients",
    initialState,
    reducers: {
      getIngredients: (state, action: PayloadAction<any>) => {
        state.pokeIngredients = {...action.payload};
      },
    }
  });

export const {getIngredients} = pokeIngredientsSlice.actions;

export default pokeIngredientsSlice.reducer;
