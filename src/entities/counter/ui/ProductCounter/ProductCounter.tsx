import React, { FC } from 'react';
import classNames from 'classnames';

import { Button } from 'shared';

import style from './ProductCounter.module.scss';

export interface ProductCounterProps {
  removeAmountProduct: () => void;
  addAmountProduct: () => void;
  amount: number;
  wrapperClassName?: string;
}

export const ProductCounter: FC<ProductCounterProps> = (props) => {
  const {
    removeAmountProduct,
    addAmountProduct,
    amount,
    wrapperClassName,
  } = props;

  return (
    <>
      <div className={classNames(style.howMuchWrapper, wrapperClassName)}>
        <Button
          className={style.buttonAmount}
          type='button'
          isGrayTheme
          imageLeft='minus.svg'
          imageWidth={24}
          imageHeight={24}
          onClick={removeAmountProduct}
        />
        <span className={style.amount}>{amount}</span>
        <Button
          className={style.buttonAmount}
          type='button'
          isGrayTheme
          imageLeft='plus.svg'
          imageWidth={24}
          imageHeight={24}
          onClick={addAmountProduct}
        />
      </div>
    </>
  );
};
