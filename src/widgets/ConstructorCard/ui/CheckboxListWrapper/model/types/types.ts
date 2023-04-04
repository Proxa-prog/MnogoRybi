import { AnyAction } from '@reduxjs/toolkit';

import { IFiltersIngredients } from 'widgets/ConstructorCard';

import { IProducts } from 'entities/basket';
import { ConstructorType, FillersType } from 'entities/constructor';

interface imageTypes {
  url: string | undefined;
  width?: number;
  height?: number;
  alt?: string;
}

interface contentHeaderTypes {
  name?: string;
  howMuchIsLeft?: number;
  total?: number;
}

export interface CheckboxListWrapperProps {
  productsType?: IProducts[];
  stepNumber?: number;
  header?: string;
  isCircleCheckbox?: boolean;
  image?: imageTypes;
  contentHeader?: contentHeaderTypes;
  description?: string;
  howMuchIsLeft?: number;
  isSelectList?: boolean;
  selectListArray?: any;
  hasHorizontalLine?: boolean;
  hasFilters?: boolean;
  checkboxState?: IFiltersIngredients | FillersType | ConstructorType;
  fillersType?: IFiltersIngredients;
  changeChecked: () => AnyAction;
  changeType: (name: ConstructorType | string) => AnyAction;
  changeFiltersType?: (name: IFiltersIngredients) => AnyAction;
}
