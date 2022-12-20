import React, { FC } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import Card, { CardProps } from '../Card/Card';

import style from './Products.module.scss';
import ChooseCard from '../ChooseCard/ChooseCard';

export interface ProductsProps {
  title?: string;
  productCards?: CardProps[];
}

const Products: FC<ProductsProps> = (props) => {
  const {
    title,
    productCards,
  } = props;

  const buttonHandleClick = (images: string) => {
    console.log("dsfg");

    // return (
    //   <ChooseCard imageUrl={images}/>
    // )
  }

  return (
    <div className={style.products_wrapper}>
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
              // onClick={buttonHandleClick}
            />
          )
        })
      }
    </div>
  );
};

export default Products;
