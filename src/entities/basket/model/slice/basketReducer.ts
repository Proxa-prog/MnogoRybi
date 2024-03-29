import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  IAmountProduct,
  IBasketArray,
  IChangeAmountAction,
  IChangeCostAction,
} from 'entities/basket';

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
    saveCardDate: true,
    comment: '',
  },
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProductInBasket: (state, action: PayloadAction<IAmountProduct>) => {
      state.basketState.basket = [...state.basketState.basket, action.payload];
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
  reducer: basketReducer,
  actions: basketActions,
} = basketSlice;
