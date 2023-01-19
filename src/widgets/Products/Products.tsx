import React, { FC } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import Card, { CardProps } from 'widgets/Card/Card';

import style from './Products.module.scss';

export interface ProductsProps {
  title?: string;
  productCards?: CardProps[];
  id?: string;
}

const Products: FC<ProductsProps> = (props) => {
  const {
    title,
    productCards,
    id,
  } = props;

  return (
    <div
      className={style.products_wrapper}
      id={id}
    >
      <h2 className={style.title}>{title}</h2>
      {
        productCards && productCards.map((productCard: CardProps) => {
          const id = nanoid();

          return (
            <Card
              key={id}
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
  );
};

export default Products;
