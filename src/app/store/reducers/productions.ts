import { createSlice } from "@reduxjs/toolkit";
import { fetchProductions } from "entities/productions/model/services/getProductions";
import { CardProps } from "widgets/ui/Card/Card";

export enum ProductionAction {
  GET_PRODUCTIONS = 'GET_PRODUCTIONS',
}

export interface IProductionsAction {
  type: ProductionAction;
  payload: CardProps[];
}

export interface IProductionsArray {
  productions: CardProps[];
}

const initialState: IProductionsArray = {
  productions: [],
}


export const productionsSlice = createSlice({
  name: 'productions',
  initialState,
  reducers: {
    getProductionsAction: (state, action) => {
      state.productions = action.payload
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchProductions.fulfilled, (state, action) => {
  //     console.log(action.payload);

  //   });
  // },
});

export const { getProductionsAction } = productionsSlice.actions;

export default productionsSlice.reducer;
