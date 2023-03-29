import React, {FC, useState} from "react";

import {Checkbox} from "shared";

import {useDispatch, useSelector} from "react-redux";
import {AnyAction} from "@reduxjs/toolkit";
import classNames from "classnames";

import {IProducts} from "entities/basket";

import style from "./CheckboxListColumnSquare.module.scss";
import {getIngredientsSelector} from "../../../../features/productions";
import {constructorSelector} from "../../../../entities/constructor";
import {log} from "util";
import {ConstructorType} from "../../../../entities/constructor/model/slice/constructorSlice";

interface CheckboxListColumnSquareProps {
  productsType: IProducts;
  isCircleCheckbox: boolean | undefined;
  className?: string;
  disabled?: boolean;
  changeChecked: () => AnyAction;
  changeType: (name: ConstructorType) => AnyAction;
  name?: string;
}

const CheckboxListColumnSquare: FC<CheckboxListColumnSquareProps> = (props) => {
  const {
    productsType,
    isCircleCheckbox,
    className,
    disabled,
    changeChecked,
    changeType,
    name,
  } = props;

  const dispatch = useDispatch();
  const constructor = useSelector(constructorSelector);

  const handleCheckboxClick = () => {
    const isChecked = constructor?.fillers?.type && constructor?.fillers?.type.find((item) => {
      if (productsType.name === item.name) {
        return item.isChecked
      }
    });

    dispatch(changeChecked());
    dispatch(changeType({
      name: productsType.name,
      isChecked: isChecked ? !isChecked.isChecked : true,
    }));
  };

  const onChange = (event: boolean) => {

  };

  const isChecked = name === 'Наполнители'
  ? constructor?.fillers?.type && constructor?.fillers?.type.find((item) => {
    if (productsType.name === item.name) {
      return item.isChecked
    }
  })
    : constructor?.topping?.type && constructor?.topping?.type.find((item) => {
    if (productsType.name === item.name) {
      return item.isChecked
    }
  })

  return (
    <li>
      <Checkbox
        onClick={handleCheckboxClick}
        isCircle={isCircleCheckbox}
        className={classNames(style.checkbox, {}, [className])}
        disabled={disabled && !isChecked}
        onChange={onChange}
        checked={isChecked?.isChecked}
      />
      <span>{productsType.name}</span>
    </li>
  )
};

export default CheckboxListColumnSquare;
