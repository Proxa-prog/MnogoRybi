import React, {FC} from "react";
import classNames from "classnames";
import {nanoid} from "nanoid";

import {Checkbox} from "shared";
import {IProducts} from "entities/basket";

import style from "./CheckboxListCircle.module.scss";

interface CheckboxListCircleProps {
  productsType: IProducts[];
  isCircleCheckbox: boolean | undefined;
}

const CheckboxListCircle: FC<CheckboxListCircleProps> = (props) => {
  const {
    productsType,
    isCircleCheckbox,
  } = props;

  return (
      <>
        {
          productsType.map((item: IProducts) => {
            const id = nanoid();

            return (
              <div
                className={classNames({[style.checkbox_wrapper]: isCircleCheckbox,}, [])}
                key={id}
              >
                <Checkbox
                  onChange={() => {}}
                  isCircle={isCircleCheckbox}
                  className={style.checkbox}
                />
                <span>{item.name}</span>
              </div>
            )
          })
        }</>
  )
};

export default CheckboxListCircle;
