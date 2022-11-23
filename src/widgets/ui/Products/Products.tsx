import { nanoid } from '@reduxjs/toolkit';
import React, { FC } from 'react';
import Card, { CardProps } from '../Card/Card';

import style from './Products.module.scss';

export interface ProductsProps {
  title?: string;
  productCards?: CardProps[];
}

const Products: FC<ProductsProps> = (props) => {
  const {
    title,
    productCards,
  } = props;

  return (
    <div className={style.products}>
      <>
        <h2 className={style.title}>{title}</h2>
        <div className={style.products_wrapper}>
          {
            productCards && productCards.map((productCard: CardProps) => {
              const id = nanoid();

              return (
                <Card
                  className={style.card}
                  id={id}
                  buttonColor={productCard.buttonColor}
                  buttonText={productCard.buttonText}
                  cost={productCard.cost}
                  previousCost={productCard.previousCost}
                  header={productCard.header}
                  description={productCard.description}
                  imageUrl={productCard.imageUrl}
                  statuses={productCard.statuses}
                />
              )
            })
          }
        </div>
      </>
    </div>
  );
};

export default Products;
