import React, {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";

import {
  getAmountConstructorProductSelector,
  IProducts,
  setAmountOfProductsInConstructor,
  setBaseCostOfProductsInConstructor,
  setCostOfProductsInConstructor
} from "entities/basket";

import {Select} from "shared";

import {changeAdditionallyType, constructorSelector} from "entities/constructor";

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
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const constructor = useSelector(constructorSelector);

  const onChange = (name: string, isChecked: boolean) => {
    dispatch(changeAdditionallyType({
      productType: header,
      productName: name
    }));
    setIsChecked(isChecked);

    const isIncludes = !constructor?.additionally?.some(item => item.productType === header);
    isChecked && isIncludes && dispatch(setBaseCostOfProductsInConstructor(180));
  }

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
          <div className={classNames(style.select_wrapper, {[style.isSelected]: isChecked}, [])}>
            <Select
              classNameList={style.list}
              className={style.select}
              options={productsType}
              promptOption='Не выбран'
              onChange={onChange}
            />
          </div>
        </>
      }
    </div>
  )
};

export default SelectList;
