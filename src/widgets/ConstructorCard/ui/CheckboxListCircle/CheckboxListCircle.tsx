import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { AnyAction } from '@reduxjs/toolkit';

import { useAppDispatch } from 'app/store';

import { IFiltersIngredients } from 'widgets/ConstructorCard';

import { IProducts } from 'entities/basket';
import {
  constructorActions,
  ConstructorType,
  filtersSelector
} from 'entities/constructor';

import { Checkbox } from 'shared';

import style from './CheckboxListCircle.module.scss';

interface CheckboxListCircleProps {
  productsType: IProducts;
  isCircleCheckbox: boolean | undefined;
  className?: string;
  isFillers?: boolean;
  checked?: boolean;
  isFillerChecked?: boolean;
  changeChecked: () => AnyAction;
  changeType: (product: ConstructorType) => AnyAction;
  changeFiltersType?: (item: IFiltersIngredients) => AnyAction;
}

export const CheckboxListCircle: FC<CheckboxListCircleProps> = (props) => {
  const {
    productsType,
    isCircleCheckbox,
    className,
    isFillers,
    checked,
    isFillerChecked,
    changeChecked,
    changeType,
    changeFiltersType,
  } = props;
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const filters = useSelector(filtersSelector);

  const handleCheckboxClick = () => {
    setIsChecked((prev) => !prev);
    isFillers && dispatch(changeChecked());
    changeType && dispatch(changeType(productsType));

    const newFilterType = filters.filters.filter((item) => item.name === productsType.name);
    changeFiltersType && dispatch(changeFiltersType(newFilterType[0]));
    changeFiltersType && dispatch(constructorActions.clearFillers());
  };

  return (
    <div
      className={classNames(
        {
          [style.wrapper]: isCircleCheckbox,
          [style.fontCheckedStyle]: isFillers ? isFillerChecked : isChecked,
          [style.checkboxWrapperChecked]: isFillers ? isFillerChecked : isChecked,
        },
        [className]
      )}
      onClick={() => {
        isFillers && handleCheckboxClick();
      }}
    >
      <Checkbox
        isCircle={isCircleCheckbox}
        className={style.checkbox}
        checked={checked}
        onChange={() => {}}
      />
      <span>{productsType.name}</span>
    </div>
  );
};
