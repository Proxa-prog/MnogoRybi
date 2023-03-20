import React, {FC, useState} from "react";

import {Checkbox} from "shared";

import {useDispatch, useSelector} from "react-redux";
import {AnyAction} from "@reduxjs/toolkit";
import classNames from "classnames";

import {IProducts} from "entities/basket";

import style from "./CheckboxListColumnSquare.module.scss";
import {getIngredientsSelector} from "../../../../features/productions";

interface CheckboxListColumnSquareProps {
  productsType: IProducts;
  isCircleCheckbox: boolean | undefined;
  className?: string;
  disabled?: boolean;
  changeChecked: () => AnyAction;
  changeType: (name: string) => AnyAction;
}

const CheckboxListColumnSquare: FC<CheckboxListColumnSquareProps> = (props) => {
  const {
    productsType,
    isCircleCheckbox,
    className,
    disabled,
    changeChecked,
    changeType,
  } = props;
  const dispatch = useDispatch();
  const [state, newState] = useState(false);

  const handleCheckboxClick = () => {
    dispatch(changeChecked());
    dispatch(changeType(productsType.name));
  };

  const func = (event: boolean | undefined) => {
    event && newState(event);
  };

  return (
    <li onClick={handleCheckboxClick}>
      <Checkbox
        onChange={func}
        isCircle={isCircleCheckbox}
        className={classNames(style.checkbox, {}, [className])}
        disabled={disabled}
      />
      <span>{productsType.name}</span>
    </li>
  )
};

export default CheckboxListColumnSquare;
