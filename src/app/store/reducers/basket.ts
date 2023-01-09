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
    recipientName: string | undefined,
    recipientPhone: string | undefined,
    recipientAddress: string,
    recipientCardNumber?: string | undefined,
    recipientCardDate?: string,
    recipientCvc?: string,
    pickupOfGoods: boolean,
    paymentToTheCourier: boolean,
    saveCardDate: boolean,
    comment?: string | undefined,
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
    recipientName: '',
    recipientPhone: '',
    recipientAddress: '',
    recipientCardNumber: '',
    recipientCardDate: '',
    recipientCvc: '',
    pickupOfGoods: false,
    paymentToTheCourier: false,
    saveCardDate: false,
    comment: '',
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
    addRecipientName: (state, action: PayloadAction<string | undefined>) => {
      state.basketState.recipientName = action.payload;
    },
    addRecipientPhone: (state, action: PayloadAction<string | undefined>) => {
      state.basketState.recipientPhone = action.payload;
    },
    addRecipientAddress: (state, action: PayloadAction<string>) => {
      state.basketState.recipientAddress = action.payload;
    },
    changePickupOfGoods: (state, action: PayloadAction<boolean>) => {
      state.basketState.pickupOfGoods = !action.payload;
    },
    addRecipientCardNumber: (state, action: PayloadAction<string | undefined>) => {
      state.basketState.recipientCardNumber = action.payload;
    },
    addRecipientCardDate: (state, action: PayloadAction<string | undefined>) => {
      state.basketState.recipientCardDate = action.payload;
    },
    addRecipientCardCvc: (state, action: PayloadAction<string | undefined>) => {
      state.basketState.recipientCvc = action.payload;
    },
    changePaymentToTheCourier: (state, action: PayloadAction<boolean>) => {
      state.basketState.paymentToTheCourier = !action.payload;
    },
    addComment: (state, action: PayloadAction<string | undefined>) => {
      state.basketState.comment = action.payload;
    },
    changeSaveCardDate: (state, action: PayloadAction<boolean>) => {
      state.basketState.saveCardDate = !action.payload;
    },
  },
});

export const {
  addProductInBasket,
  openBasketBlock,
  changeAmount,
  changeCost,
  removeProduct,
  addRecipientName,
  addRecipientPhone,
  addRecipientAddress,
  changePickupOfGoods,
  addRecipientCardNumber,
  addRecipientCardDate,
  addRecipientCardCvc,
  changePaymentToTheCourier,
  addComment,
  changeSaveCardDate,
} = basketSlice.actions;

export default basketSlice.reducer;
