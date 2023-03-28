import React, { FC } from 'react';
import classNames from 'classnames';

import { Button } from 'shared/ui/Button/Button';

import style from './ProductCounter.module.scss';

export interface ProductCounterProps {
  removeAmountProduct: () => void;
  addAmountProduct: () => void;
  amount: number;
  wrapperClassName?: string;
}

const ProductCounter: FC<ProductCounterProps> = (props) => {
  const {
    removeAmountProduct,
    addAmountProduct,
    amount,
    wrapperClassName,
  } = props;

  return (
    <>
      <div
        className={classNames(
          style.how_much_wrapper,
          wrapperClassName,
        )}
      >
        <Button
          className={style.button_amount}
          type='button'
          isGrayTheme
          imageLeft='minus.svg'
          imageWidth={24}
          imageHeight={24}
          onClick={removeAmountProduct}
        />
        <span className={style.amount}>{amount}</span>
        <Button
          className={style.button_amount}
          type='button'
          isGrayTheme
          imageLeft='plus.svg'
          imageWidth={24}
          imageHeight={24}
          onClick={addAmountProduct}
        />
      </div>
    </>
  )
};

export default ProductCounter;
