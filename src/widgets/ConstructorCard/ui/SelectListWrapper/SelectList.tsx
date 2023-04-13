import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { IProducts, amountProductActions } from 'entities/basket';

import { Select } from 'shared';

import {
  AdditionallyType,
  constructorActions,
  constructorSelector,
} from 'entities/constructor';

import style from './SelectList.module.scss';

export interface SelectListProps {
  productsType: IProducts[];
  header?: string;
  isSelected?: boolean;
  id?: string;
}

export const SelectList: FC<SelectListProps> = (props) => {
  const {
    productsType,
    header,
    isSelected,
    id,
  } = props;
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const constructor = useSelector(constructorSelector);

  const onChange = (name: string, isChecked: boolean) => {
    dispatch(
      constructorActions.changeAdditionallyType({
        productType: header,
        productName: name,
      })
    );
    setIsChecked(isChecked);

    const isIncludes = !constructor.additionally?.some(
      (item: AdditionallyType) => item.productType === header
    );
    isChecked &&
      isIncludes &&
      dispatch(amountProductActions.setBaseCostOfProductsInConstructor(180));
  };

  return (
    <div className={style.wrapper}>
      {productsType && header && (
        <>
          <h4 className={classNames(style.label)}>{header}</h4>
          <div className={classNames(style.selectWrapper, { [style.isSelected]: isChecked }, [])}>
            <Select
              classNameWrapper={style.selectInner}
              classNameList={style.list}
              className={style.selectAdditionally}
              options={productsType}
              promptOption='Не выбран'
              onChange={onChange}
              id={id}
            />
          </div>
        </>
      )}
    </div>
  );
};
