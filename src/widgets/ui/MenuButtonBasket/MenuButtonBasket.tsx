import React, { FC } from 'react';
import { ViewPorts } from '/src/constants/constants';

import Button from '/src/shared/ui/Button/Button';
import StatusMarker from '/src/shared/ui/StatusMarker/StatusMarker';

import style from '/src/widgets/ui/Header/Header.module.scss';

interface MenuButtonBasketProps {
  itemsInTheBasket: number;
  scroll?: number;
  windowWidth: number;
}

const MenuButtonBasket: FC<MenuButtonBasketProps> = (props) => {
  const {
    itemsInTheBasket,
    scroll,
    windowWidth,
  } = props;

  if (
    scroll !== undefined
    && scroll > 0
    && windowWidth >= ViewPorts.DESKTOP
  ) {

    return (
      <Button
        childrenWrapperClassName="button__text_wrapper"
        className={
          (scroll !== undefined && scroll >= 100)
            ? style.header__button_basket_scroll
            : style.header__button_basket
        }
        type="button"
        color="yellow"
        imageLeft="property_bag_alt_fill.svg"
        onClick={() => {
          console.log('Button enter header');
        }}
      >
        0 &#8381;
      </Button>
    );
  }

  return (
    <>
      {
        (itemsInTheBasket !== undefined)
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
          )
      }
      <Button
        childrenWrapperClassName="button__text_wrapper"
        className={
          (scroll !== undefined && scroll >= 100)
            ? style.header__button_basket_scroll
            : style.header__button_basket
        }
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

export default MenuButtonBasket;
