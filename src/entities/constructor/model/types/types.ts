import { IFiltersIngredients } from 'widgets/ConstructorCard';

export interface ConstructorType {
  name?: string;
  isChecked?: boolean;
}

export interface FillersType {
  name?: string;
  type?: ConstructorType[];
  isChecked?: boolean;
}

export interface AdditionallyType {
  productType?: string;
  productName?: string;
}

export interface IConstructor {
  baseProduct?: ConstructorType;
  fillersType?: IFiltersIngredients;
  fillers?: FillersType;
  sauce?: ConstructorType;
  protein?: ConstructorType;
  topping?: FillersType;
  crunch?: ConstructorType;
  additionally?: AdditionallyType[];
}

export interface IConstructorState {
  constructor: IConstructor;
}
