import React, { FC } from 'react';
import { ONE_HUNDRED_PIXEL_SCROLL, ViewPorts } from 'entities/constants/constants';

import Button from 'shared/ui/Button/Button';
import StatusMarker from 'shared/ui/StatusMarker/StatusMarker';

import style from 'widgets/ui/Header/Header.module.scss';

interface MenuButtonBasketProps {
  itemsInTheBasket: number;
  scroll?: number;
  windowWidth: number;
  onBasketButtonClick?: () => void;
  onClick?: () => void;
}

const MenuButtonBasket: FC<MenuButtonBasketProps> = (props) => {
  const {
    itemsInTheBasket,
    scroll,
    windowWidth,
    onBasketButtonClick,
    onClick,
  } = props;

  if (
    scroll
    && scroll > 0
    && windowWidth >= ViewPorts.DESKTOP
  ) {

    return (
      <Button
        childrenWrapperClassName="button__text_wrapper"
        className={
          (scroll && scroll >= ONE_HUNDRED_PIXEL_SCROLL)
            ? style.header__button_basket_scroll
            : style.header__button_basket
        }
        type="button"
        color="yellow"
        imageLeft="property_bag_alt_fill.svg"
        onClick={onClick}
      >
        0 &#8381;
      </Button>
    );
  }

  return (
    <>
      {
        (itemsInTheBasket)
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
          (scroll && scroll >= ONE_HUNDRED_PIXEL_SCROLL)
            ? style.header__button_basket_scroll
            : style.header__button_basket
        }
        type="button"
        color="yellow"
        imageLeft="property_bag_alt_fill.svg"
        onClick={onBasketButtonClick}
      >
        0 &#8381;
      </Button>
    </>
  );
};

export default MenuButtonBasket;
