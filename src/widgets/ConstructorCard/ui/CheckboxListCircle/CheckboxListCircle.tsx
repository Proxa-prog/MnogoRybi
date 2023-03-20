import React, {FC, useState} from "react";
import classNames from "classnames";

import {Checkbox} from "shared";
import {IProducts} from "entities/basket";

import style from "./CheckboxListCircle.module.scss";
import {useDispatch} from "react-redux";
import {
  changeFillersType,
  changeIsFillerChecked,
} from "entities/constructor";
import {AppDispatch} from "../../../../app/store";
import {AnyAction} from "@reduxjs/toolkit";

interface CheckboxListCircleProps {
  productsType: IProducts;
  isCircleCheckbox: boolean | undefined;
  className?: string;
  isFillers?: boolean;
  checked?: boolean;
  isFillerChecked?: boolean;
  changeChecked: () => AnyAction;
  changeType: (name: string) => AnyAction;
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
  } = props;
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked((prev) => !prev);
    isFillers && dispatch(changeChecked());
    dispatch(changeType(productsType.name));
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
