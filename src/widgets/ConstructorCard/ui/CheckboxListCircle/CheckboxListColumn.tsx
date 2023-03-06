import React, {FC} from "react";

import {Checkbox} from "shared";

import style from "./CheckboxListColumn.module.scss";

interface CheckboxListColumnProps {
  productsType: string[];
  isCircleCheckbox: boolean | undefined;
}

const CheckboxListColumn: FC<CheckboxListColumnProps> = (props) => {
  const {
    productsType,
    isCircleCheckbox,
  } = props;

  return (
    <ul className={style.list}>
      {
        productsType && productsType.map((item: any) => (
          <li>
            <Checkbox
              onChange={() => {}}
              isCircle={isCircleCheckbox}
              className={style.checkbox}
            />
            <span>{item}</span>
          </li>
        ))
      }
    </ul>
  )
};

export default CheckboxListColumn;
