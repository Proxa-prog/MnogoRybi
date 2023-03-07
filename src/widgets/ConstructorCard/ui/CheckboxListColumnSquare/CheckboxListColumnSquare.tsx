import React, {FC} from "react";

import {Checkbox} from "shared";

import style from "./CheckboxListColumnSquare.module.scss";
import {IProducts} from "../../../../entities/basket";
import {nanoid} from "nanoid";

interface CheckboxListColumnSquareProps {
  productsType: IProducts[];
  isCircleCheckbox: boolean | undefined;
}

const CheckboxListColumnSquare: FC<CheckboxListColumnSquareProps> = (props) => {
  const {
    productsType,
    isCircleCheckbox,
  } = props;

  return (
    <ul className={style.list}>
      {
        productsType && productsType.map((item: IProducts) => {
          const id = nanoid();

          return (
            <li key={id}>
              <Checkbox
                onChange={() => {}}
                isCircle={isCircleCheckbox}
                className={style.checkbox}
              />
              <span>{item.name}</span>
            </li>
          )
        })
      }
    </ul>
  )
};

export default CheckboxListColumnSquare;
