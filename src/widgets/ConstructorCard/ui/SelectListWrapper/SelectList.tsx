import React, {FC} from "react";
import classNames from "classnames";

import {IProducts} from "entities/basket";

import {Select} from "shared";

import style from "./SelectList.module.scss";

export interface  SelectListProps {
  productsType: IProducts[];
  header?: string;
  isSelected?: boolean;
}

const SelectList: FC<SelectListProps> = (props) => {
  const {
    productsType,
    header,
    isSelected,
  } = props;

  return (
    <div className={style.wrapper}>
      {
        productsType
        && header
        &&
        <>
          <h4 className={classNames(
            style.label,
          )}>
            {header}
          </h4>
          <div className={classNames(style.select_wrapper, {[style.isSelected]: isSelected}, [])}>
            <Select
              classNameList={style.list}
              className={style.select}
              options={productsType}
              promptOption='Не выбран'
            />
          </div>
        </>
      }
    </div>
  )
};

export default SelectList;
