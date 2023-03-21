import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IFiltersIngredients} from "../../../../widgets/ConstructorCard/model/types/types";

export interface IIngredients {
  name: string;
  isChecked: boolean;
}

export interface ConstructorType {
  name?: string;
  isChecked?: boolean;
}

export interface FillersType {
  name?: string;
  type?: string[];
  isChecked?: boolean;
}

export interface AdditionallyType {
  productType?: string;
  productName?: string;
}

interface  IConstructor {
  baseProduct?: ConstructorType,
  fillersType?: IFiltersIngredients;
  fillers?: FillersType,
  sauce?: ConstructorType,
  protein?: ConstructorType,
  topping?: FillersType,
  crunch?: ConstructorType,
  additionally?: AdditionallyType[],
}

interface IConstructorState {
  constructor: IConstructor;
}

const initialState: IConstructorState = {
  constructor: {
    fillersType: {
      name: '5 наполнителей + 1 топпинг',
      ingredients: [
        {
          count: 5,
          name: 'Наполнители',
        },
        {
          count: 1,
          name: 'Топпинг',
        },
      ]
    },
    baseProduct: {
      name: '',
      isChecked: false,
    },
    fillers: {
      type: [],
      isChecked: false,
    },
    sauce: {
      name: '',
      isChecked: false,
    },
    protein: {
      name: '',
      isChecked: false,
    },
    topping: {
      type: [],
      isChecked: false,
    },
    crunch: {
      name: '',
      isChecked: false,
    },
    additionally: [],
  }
};

export const constructorSlice = createSlice({
  name: "constructor",
  initialState,
  reducers: {
    changeFillersType: (state, action: PayloadAction<IFiltersIngredients>) => {
      state.constructor.fillersType && (state.constructor.fillersType = action.payload);
    },
    changeFillers: (state, action: PayloadAction<string>) => {
      // @ts-ignore
      if (!state.constructor.fillers.type.includes(action.payload)) {
        // @ts-ignore
        state.constructor.fillers && (state.constructor.fillers.type = [...state.constructor.fillers.type, action.payload]);
      } else {
        // @ts-ignore
        state.constructor.fillers && (state.constructor.fillers.type = state.constructor.fillers.type.filter(item => item !== action.payload));
      }
      console.log(state!.constructor!.fillers!.type);
    },
    changeIsFillerChecked: (state) => {
      state.constructor.fillers && (state.constructor.fillers.isChecked = !state.constructor?.baseProduct?.isChecked);
    },
    changeBaseProductType: (state, action: PayloadAction<string>) => {
      state.constructor.baseProduct && (state.constructor.baseProduct.name = action.payload);
    },
    changeIsBaseProductChecked: (state) => {
      state.constructor.baseProduct && (state.constructor.baseProduct.isChecked = !state.constructor?.baseProduct?.isChecked);
    },
    changeProteinType: (state, action: PayloadAction<string>) => {
      state.constructor.protein && (state.constructor.protein.name = action.payload);
    },
    changeProteinChecked: (state) => {
      state.constructor.protein && (state.constructor.protein.isChecked = !state.constructor?.baseProduct?.isChecked);
    },
    changeToppingType: (state, action: PayloadAction<string>) => {
      // @ts-ignore
      if (!state.constructor.topping.type.includes(action.payload)) {
        // @ts-ignore
        state.constructor.topping && (state.constructor.topping.type = [...state.constructor.topping.type, action.payload]);
      } else {
        // @ts-ignore
        state.constructor.topping && (state.constructor.topping.type = state.constructor.topping.type.filter(item => item !== action.payload));
      }
    },
    changeToppingChecked: (state) => {
      state.constructor.topping && (state.constructor.topping.isChecked = !state.constructor?.topping?.isChecked);
    },
    changeSauceType: (state, action: PayloadAction<string>) => {
      state.constructor.sauce && (state.constructor.sauce.name = action.payload);
    },
    changeSauceChecked: (state) => {
      state.constructor.sauce && (state.constructor.sauce.isChecked = !state.constructor?.sauce?.isChecked);
    },
    changeCrunchType: (state, action: PayloadAction<string>) => {
      state.constructor.crunch && (state.constructor.crunch.name = action.payload);
    },
    changeCrunchChecked: (state) => {
      state.constructor.crunch && (state.constructor.crunch.isChecked = !state.constructor?.crunch?.isChecked);
    },
    changeAdditionallyType: (state, action: PayloadAction<AdditionallyType>) => {
      const isContains = state.constructor.additionally?.filter((item) => item.productType !== action.payload.productType);
      state.constructor.additionally && isContains && (state.constructor.additionally = [...isContains, action.payload]);
    },
  },
});

export const {
  changeFillersType,
  changeFillers,
  changeIsFillerChecked,
  changeBaseProductType,
  changeIsBaseProductChecked,
  changeProteinType,
  changeProteinChecked,
  changeToppingType,
  changeToppingChecked,
  changeSauceType,
  changeSauceChecked,
  changeCrunchType,
  changeCrunchChecked,
  changeAdditionallyType,
} = constructorSlice.actions;

export default constructorSlice.reducer;


