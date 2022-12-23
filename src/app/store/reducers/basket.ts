import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAmountProduct } from "./amountProduct";

export enum IBasketAction {
  ADD_PRODUCT = "ADD_PRODUCT",
  OPEN_BASKET = "OPEN_BASKET",
}

export interface IBasketArray {
  basketState: {
    basket: IAmountProduct[];
    isBasketOpen: boolean;
  };
}

interface IChangeAmountAction {
  addAmount: number;
  id: string | undefined;
}

interface IChangeCostAction {
  addCost: number;
  id: string | undefined;
}

const initialState: IBasketArray = {
  basketState: {
    basket: [],
    isBasketOpen: false,
  },
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProductInBasket: (state, action: PayloadAction<IAmountProduct>) => {
      state.basketState.basket = [...state.basketState.basket, action.payload];
      state.basketState.isBasketOpen = state.basketState.isBasketOpen;
    },
    openBasketBlock: (state, action: PayloadAction<boolean>) => {
      state.basketState.isBasketOpen = !action.payload;
    },
    changeAmount: (state, action: PayloadAction<IChangeAmountAction>) => {
      state.basketState.basket.map((item) => {
        if (item.id === action.payload.id) {
          item.amount = action.payload.addAmount;
        }
      });
    },
    changeCost: (state, action: PayloadAction<IChangeCostAction>) => {
      state.basketState.basket.map((item) => {
        if (item.id === action.payload.id) {
          item.cost = action.payload.addCost;
        }
      });
    },
    removeProduct: (state, action: PayloadAction<string | undefined>) => {
      state.basketState.basket.map((item, index) => {
        if (item.id === action.payload) {
          state.basketState.basket.splice(index, 1);
        }
      });
    },
  },
});

export const {
  addProductInBasket,
  openBasketBlock,
  changeAmount,
  changeCost,
  removeProduct,
} = basketSlice.actions;

export default basketSlice.reducer;
