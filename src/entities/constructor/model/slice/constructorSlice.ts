import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IIngredients {
  name: string;
  isChecked: boolean;
}

export interface ConstructorType {
  type?: string;
  isChecked?: boolean;
}

export interface FillersType {
  type?: string[];
  isChecked?: boolean;
}

interface  IConstructor {
  baseProduct?: ConstructorType,
  fillersType?: ConstructorType;
  fillers?: FillersType,
  sauce?: ConstructorType,
  protein?: ConstructorType,
  topping?: FillersType,
  crunch?: ConstructorType,
}

interface IConstructorState {
  constructor: IConstructor;
}

const initialState: IConstructorState = {
  constructor: {
    fillersType: {
      type: '5 наполнителей + 1 топпинг',
      isChecked: false,
    },
    baseProduct: {
      type: '',
      isChecked: false,
    },
    fillers: {
      type: [],
      isChecked: false,
    },
    sauce: {
      type: '',
      isChecked: false,
    },
    protein: {
      type: '',
      isChecked: false,
    },
    topping: {
      type: [],
      isChecked: false,
    },
    crunch: {
      type: '',
      isChecked: false,
    },
  }
};

export const constructorSlice = createSlice({
  name: "constructor",
  initialState,
  reducers: {
    changeFillersType: (state, action: PayloadAction<string>) => {
      state.constructor.fillersType && (state.constructor.fillersType.type = action.payload);
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
      state.constructor.baseProduct && (state.constructor.baseProduct.type = action.payload);
    },
    changeIsBaseProductChecked: (state) => {
      state.constructor.baseProduct && (state.constructor.baseProduct.isChecked = !state.constructor?.baseProduct?.isChecked);
    },
    changeProteinType: (state, action: PayloadAction<string>) => {
      state.constructor.protein && (state.constructor.protein.type = action.payload);
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
      state.constructor.sauce && (state.constructor.sauce.type = action.payload);
    },
    changeSauceChecked: (state) => {
      state.constructor.sauce && (state.constructor.sauce.isChecked = !state.constructor?.sauce?.isChecked);
    },
    changeCrunchType: (state, action: PayloadAction<string>) => {
      state.constructor.crunch && (state.constructor.crunch.type = action.payload);
    },
    changeCrunchChecked: (state) => {
      state.constructor.crunch && (state.constructor.crunch.isChecked = !state.constructor?.crunch?.isChecked);
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
} = constructorSlice.actions;

export default constructorSlice.reducer;


