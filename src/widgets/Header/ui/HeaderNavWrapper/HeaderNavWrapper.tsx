import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';

import { MenuButtonBasket } from 'widgets/MenuButtonBasket';
import { MenuButtonEnter } from 'widgets/MenuButtonEnter';

import {
  getRestaurantPagesInfoSelector,
  getRestaurantProductionsSelector,
  restaurantPagesInfoActions,
  restaurantProductionsActions,
} from 'features/restaurant';

import {
  ONE_HUNDRED_PIXEL_SCROLL,
  ViewPorts,
  ImageWrapper,
  Button,
  List,
} from 'shared';

import style from './HeaderNavWrapper.module.scss';

interface HeaderNavWrapperProps {
  isHeaderMenuActive: boolean;
  windowWidth: number;
  isAuth: boolean;
  itemsInTheBasket: number | undefined;
  scrollHeight: number;
  isProductsMenuActive: boolean;
  onProductsMenuClick: () => void;
  onClick?: () => void;
  onBasketButtonClick?: () => void;
}

export const HeaderNavWrapper: FC<HeaderNavWrapperProps> = (props) => {
  const {
    isHeaderMenuActive,
    windowWidth,
    isAuth,
    itemsInTheBasket,
    scrollHeight,
    isProductsMenuActive,
    onProductsMenuClick,
    onClick,
    onBasketButtonClick,
  } = props;

  const dispatch = useDispatch();
  const restaurantProductions = useSelector(getRestaurantProductionsSelector);
  const pagesInfo = useSelector(getRestaurantPagesInfoSelector);
  const [buttonMoreIsOpen, setButtonMoreIsOpen] = useState(true);

  const handleProductionsClick = (
    event: React.MouseEvent<HTMLLIElement>,
    items: any
  ) => {
    const newArray = items.map((item: any) => {
      if (event.currentTarget.id === `navLink${item.id}`) {
        return {
          ...item,
          isCurrent: !item.isCurrent,
        };
      }

      return {
        ...item,
        isCurrent: false,
      };
    });

    dispatch(restaurantProductionsActions.getRestaurantProducts(newArray));
  };

  const handlePagesClick = (
    event: React.MouseEvent<HTMLLIElement>,
    items: any
  ) => {

    const newArray = items.map((item: any) => {
      if (event.currentTarget.id === `navLink${item.id}`) {
        return {
          ...item,
          isCurrent: !item.isCurrent,
        };
      } else {
        return {
          ...item,
          isCurrent: false,
        };
      }
    });

    dispatch(restaurantPagesInfoActions.getPagesNames(newArray));
  };

  return (
    <div
      className={classNames(style.headerNavWrapper, {
        [style.navWrapperScroll]:
          scrollHeight >= ONE_HUNDRED_PIXEL_SCROLL,
      })}
    >
      <div className={classNames(style.navWrapper)}>
        <nav className={style.nav}>
          {(isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP) || (
            <Button
              isGrayTheme
              className={style.buttonProductsMenu}
              type='button'
              imageRight={
                isProductsMenuActive
                  ? 'property_expand_up.svg'
                  : 'property_expand_down.svg'
              }
              imageHeight={24}
              imageWidth={24}
              onClick={onProductsMenuClick}
            >
              Меню
            </Button>
          )}
          <div
            className={classNames(style.listWrapper, {
              [style.listWrapperScroll]: scrollHeight >= ONE_HUNDRED_PIXEL_SCROLL,
              [style.listWrapperOpen]: isProductsMenuActive && !isHeaderMenuActive,
              [style.openButtonMenu]: isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP,
            })}
          >
            {scrollHeight >= ONE_HUNDRED_PIXEL_SCROLL &&
              windowWidth >= ViewPorts.DESKTOP && (
                <Link to='/'>
                  <ImageWrapper
                    className={style.logoScroll}
                    name='logo_only_image.svg'
                    alt='Логотип тарелка, рыба, китайские палочки'
                    width={38.25}
                    height={45}
                  />
                </Link>
              )}
            <List
              isNavigate
              classNameList={classNames(
                style.productsList,
                { [style.productsListOpen]: isProductsMenuActive },
                { [style.productsListClosed]: isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP },
                []
              )}
              classNameItem={classNames(
                style.productsItem,
                { [style.productsItemOpen]: isProductsMenuActive },
                []
              )}
              items={restaurantProductions.products}
              onClick={(event) => {
                handleProductionsClick(event, restaurantProductions.products);
              }}
            />
            <div className={style.verticalLine} />
            {scrollHeight >= ONE_HUNDRED_PIXEL_SCROLL &&
            windowWidth >= ViewPorts.DESKTOP ? (
              <>
                <List
                  isLink
                  classNameList={style.infoListScroll}
                  classNameItem={style.infoItemScroll}
                  items={pagesInfo.pagesNames}
                  onClick={(event) => {
                    handlePagesClick(event, pagesInfo.pagesNames);
                  }}
                />
                <Button
                  className={style.buttonMore}
                  type='button'
                  imageRight='property_expand_down.svg'
                  imageHeight={24}
                  imageWidth={24}
                  onClick={() => {
                    setButtonMoreIsOpen((prev) => !prev);
                  }}
                >
                  Ещё
                </Button>
                <div
                  className={classNames(
                    buttonMoreIsOpen && style.listMoreInfo,
                    !buttonMoreIsOpen && style.listMoreInfoOpen
                  )}
                >
                  <List
                    isLink
                    classNameList={style.listScrollMoreInfo}
                    classNameItem={style.itemScrollMoreInfo}
                    items={pagesInfo.pagesNames}
                    onClick={(event) => {
                      handlePagesClick(event, pagesInfo.pagesNames);
                    }}
                  />
                </div>
              </>
            ) : (
              <List
                isLink
                classNameList={classNames(style.infoList, {
                  [style.infoListOpen]: isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP,
                })}
                classNameItem={classNames(style.infoItem, {
                  [style.infoItemOpen]: isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP,
                })}
                items={pagesInfo.pagesNames}
                onClick={(event) => {
                  handlePagesClick(event, pagesInfo.pagesNames);
                }}
              />
            )}
          </div>
          <div className={style.buttonWrapper}>
            {(isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP) || (
              <Button
                className={style.buttonCreatePokeWrapper}
                type='button'
                isGrayTheme
                onClick={() => {
                  console.log('Button Create');
                }}
              >
                <Link
                  to={`/constructor`}
                  className={style.createPokeButton}
                >
                  Создать поке
                </Link>
              </Button>
            )}
            {scrollHeight >= ONE_HUNDRED_PIXEL_SCROLL &&
              windowWidth >= ViewPorts.TABLET && (
                <>
                  <MenuButtonEnter
                    isAuth={isAuth}
                    scroll={scrollHeight}
                  />
                  <div className={style.buttonBasketWrapper}>
                    <MenuButtonBasket
                      itemsInTheBasket={itemsInTheBasket}
                      scroll={scrollHeight}
                      windowWidth={windowWidth}
                      onBasketButtonClick={onBasketButtonClick}
                    />
                  </div>
                </>
              )}
          </div>
        </nav>
      </div>
    </div>
  );
};
