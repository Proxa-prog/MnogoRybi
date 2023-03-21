import React, {FC, useEffect, useState} from "react";
import classNames from "classnames";

import {Checkbox} from "shared";
import {IProducts} from "entities/basket";

import {useDispatch, useSelector} from "react-redux";
import {AnyAction} from "@reduxjs/toolkit";
import style from "./CheckboxListCircle.module.scss";
import {IFiltersIngredients} from "../../model/types/types";
import {filtersSelector} from "../../../../entities/constructor/model/selectors/filtersSelector";
import {fetchFilters} from "../../../../entities/constructor/model/services/fetchFilters";
import {useAppDispatch} from "../../../../app/store";

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

// const filters: IFiltersIngredients[] = [
//   {
//     name: '5 наполнителей + 1 топпинг',
//     ingredients: [
//       {
//         count: 5,
//         name: 'Наполнители',
//       },
//       {
//         count: 1,
//         name: 'Топпинг',
//       },
//     ]
//   },
//   {
//     name: '3 наполнителя + 2 топпинга',
//     ingredients: [
//       {
//         count: 3,
//         name: 'Наполнители',
//       },
//       {
//         count: 2,
//         name: 'Топпинг',
//       },
//     ]
//   },
// ];

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
