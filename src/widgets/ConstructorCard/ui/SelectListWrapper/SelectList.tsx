import React, {FC, useState} from "react";
import classNames from "classnames";

import {IProducts} from "entities/basket";

import {Select} from "shared";

import style from "./SelectList.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {changeAdditionallyType} from "../../../../entities/constructor";
import {additionallySelector} from "../../../../entities/constructor/model/selectors/additionallySelector";

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

  const onChange = (name: string, isChecked: boolean) => {
    dispatch(changeAdditionallyType({
      productType: header,
      productName: name
    }));
    setIsChecked(isChecked);
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
