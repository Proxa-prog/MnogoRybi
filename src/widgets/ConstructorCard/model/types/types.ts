import { IProducts } from 'entities/basket';

type IProductsNew = Omit<IProducts, 'id' | 'isCurrent'>;

export interface IIngredientsCount {
  count: number;
  name: string;
}

export interface IFiltersIngredients extends IProductsNew {
  ingredients: IIngredientsCount[];
}

export interface ResponseApiFilters {
  status: string;
  data: IFiltersIngredients[];
}
