import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { nanoid } from 'nanoid';

import { useAppDispatch } from 'app/store';

import { MenuButtonBasket } from 'widgets/MenuButtonBasket';

import { getRestaurantPagesInfoSelector } from 'features/restaurant';

import { basketActions } from 'entities/basket';

import { ViewPorts, ImageWrapper, LabelText, Select, Button } from 'shared';

import style from './HeaderOrderDataWrapper.module.scss';

interface HeaderOrderDataWrapperProps {
  isHeaderMenuActive: boolean;
  windowWidth: number;
  isAuth: boolean;
  itemsInTheBasket: number | undefined;
  onHeaderMenuClick: () => void;
  onClick?: () => void;
  onBasketButtonClick?: () => void;
}

export const HeaderOrderDataWrapper: FC<HeaderOrderDataWrapperProps> = (props) => {
  const {
    isHeaderMenuActive,
    windowWidth,
    isAuth,
    itemsInTheBasket,
    onHeaderMenuClick,
    onClick,
    onBasketButtonClick,
  } = props;
  const dispatch = useAppDispatch();
  const pagesInfo = useSelector(getRestaurantPagesInfoSelector);
  const selectId = nanoid();

  const handlerChangeSelectAddress = (address: string) => {
    dispatch(basketActions.addRecipientAddress(address));
  };

  return (
    <div
      className={classNames(style.orderDataWrapper, {
        [style.orderDataWrapperOpen]: isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP,
      })}
    >
      <Button
        buttonName='Меню'
        isGrayTheme={isHeaderMenuActive && true}
        imageLeft={isHeaderMenuActive ? 'property_close_round.svg' : 'property_menu.svg'}
        imageHeight={24}
        imageWidth={24}
        className={classNames(style.menuButton, {
          [style.menuButtonOpen]: isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP,
        })}
        type='button'
        onClick={onHeaderMenuClick}
      />
      {(isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP) || (
        <Link to='/'>
          <ImageWrapper
            className={style.logo}
            alt='Логотип Много Рыбы'
            name='logo.svg'
            width={236}
            height={70}
          />
        </Link>
      )}

      <div
        className={classNames(style.orderData, {
          [style.orderDataOpen]: isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP,
        })}
      >
        <div
          className={classNames(style.infoWrapper, {
            [style.infoWrapperOpen]: isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP,
          })}
        >
          <div
            className={classNames(style.info, {
              [style.infoOpen]: isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP,
            })}
          >
            <LabelText>Доставка по адресу</LabelText>
            <Select
              className={style.open}
              classNameWrapper={style.selectWrapper}
              classNameList={style.classNameList}
              options={pagesInfo.restaurantAddress}
              promptOption='Адрес не выбран'
              onChange={handlerChangeSelectAddress}
              id={selectId}
            />
          </div>
          <div
            className={classNames(style.info, {
              [style.infoOpen]: isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP,
            })}
          >
            <LabelText>Принимаем заказы</LabelText>
            <span>9:00-24:00</span>
          </div>
          <div
            className={classNames(style.info, {
              [style.infoOpen]: isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP,
            })}
          >
            <LabelText>Телефон</LabelText>
            <a href='tel:+74852980100'>8 (4852) 980-100</a>
          </div>
        </div>
      </div>
      <div className={style.buttonWrapper}>
        {!isHeaderMenuActive ? (
          isAuth ? (
            <Link to='/personalArea'>
              <Button
                buttonName='Личный кабинет'
                imageLeft='user_fill.svg'
                imageHeight={24}
                imageWidth={24}
                className={style.userAuth}
                type='button'
                onClick={() => {}}
              />
            </Link>
          ) : windowWidth < ViewPorts.TABLET ? (
            <Button
              buttonName='Личный кабинет'
              imageLeft='user_fill.svg'
              imageHeight={24}
              imageWidth={24}
              className={style.userAuth}
              type='button'
              onClick={onClick}
            />
          ) : (
            <Button buttonName='Вход' type='button' onClick={onClick}>
              Войти
            </Button>
          )
        ) : (
          <></>
        )}
        {(isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP) || (
          <Button
            buttonName='Заказы'
            type='button'
            className={style.buttonOrders}
            imageLeft='desk_alt_fill.svg'
            imageHeight={24}
            imageWidth={24}
            onClick={() => {
              console.log('Button orders header');
            }}
          >
            Заказы
          </Button>
        )}
        {(isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP) || (
          <div className={style.buttonBasketWrapper}>
            <MenuButtonBasket
              itemsInTheBasket={itemsInTheBasket}
              windowWidth={windowWidth}
              onBasketButtonClick={onBasketButtonClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};
