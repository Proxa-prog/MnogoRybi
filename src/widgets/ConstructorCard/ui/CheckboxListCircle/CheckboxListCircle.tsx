import React, {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import {AnyAction} from "@reduxjs/toolkit";

import {useAppDispatch} from "app/store";

import {Checkbox} from "shared";

import {IProducts} from "entities/basket";
import {filtersSelector} from "entities/constructor";

import {IFiltersIngredients} from "../../model/types/types";

import style from "./CheckboxListCircle.module.scss";

interface CheckboxListCircleProps {
  productsType: IProducts;
  isCircleCheckbox: boolean | undefined;
  className?: string;
  isFillers?: boolean;
  checked?: boolean;
  isFillerChecked?: boolean;
  changeChecked: () => AnyAction;
  changeType: (name: string) => AnyAction;
  changeFiltersType?: (item: IFiltersIngredients) => AnyAction;
}

const CheckboxListCircle: FC<CheckboxListCircleProps> = (props) => {
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
    changeType && dispatch(changeType(productsType.name));

    const newFilterType = filters.filters.filter((item) => item.name === productsType.name);
    changeFiltersType && dispatch(changeFiltersType(newFilterType[0]));
  };

  return (
    <div
      className={classNames(
        {
          [style.checkbox_wrapper]: isCircleCheckbox,
          [style.font_checked_style]: isFillers ? isFillerChecked : isChecked,
          [style.checkbox_wrapper_checked]: isFillers ? isFillerChecked : isChecked,
        },
        [className])}
      onClick={() => {isFillers && handleCheckboxClick()}}
    >
      <Checkbox
        isCircle={isCircleCheckbox}
        className={style.checkbox}
        checked={checked}
        onChange={() => {}}
      />
      <span>{productsType.name}</span>
    </div>
  )
};

export default CheckboxListCircle;
