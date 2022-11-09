import React, { FC } from 'react';

import Button from '../../../shared/ui/Button/Button';
import StatusMarker from '../../../shared/ui/StatusMarker/StatusMarker';

import style from '../Header/Header.module.scss';

interface MenuButtonBasketRenderProps {
  itemsInTheBasket: number;
}

const MenuButtonBasketRender: FC<MenuButtonBasketRenderProps> = (props) => {
  const {
    itemsInTheBasket,
  } = props;

  return (
    <>
      {(itemsInTheBasket !== undefined)
        ? (
          <StatusMarker
            key={0}
            color="blue"
            className={style.header__amount_items}
          >
            {itemsInTheBasket}
          </StatusMarker>
        )
        : (
          <StatusMarker
            key={0}
            color="blue"
            className={style.header__amount_items}
          >
            0
          </StatusMarker>
        )}
      <Button
        className={style.header__button_basket}
        type="button"
        color="yellow"
        imageLeft="property_bag_alt_fill.svg"
        onClick={() => {
          console.log('Button enter header');
        }}
      >
        0 &#8381;
      </Button>
    </>
  );
};

export default MenuButtonBasketRender;
