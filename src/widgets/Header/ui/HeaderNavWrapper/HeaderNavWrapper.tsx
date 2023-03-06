import React, {FC, useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import classNames from "classnames";

import {MenuButtonBasket} from "widgets/MenuButtonBasket";
import {MenuButtonEnter} from "widgets/MenuButtonEnter";

import {
  getRestaurantPagesInfoSelector,
  getRestaurantProductionsSelector, getRestaurantProducts,
} from "features/restaurant";

import {
  ONE_HUNDRED_PIXEL_SCROLL,
  ViewPorts,
  ImageWrapper,
  Button,
  List,
} from "shared";

import style from "widgets/Header/ui/Header/Header.module.scss";
import {IProducts} from "../../../../entities/basket";
import {useAppDispatch} from "../../../../app/store";

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

const HeaderNavWrapper: FC<HeaderNavWrapperProps> = (props) => {
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
  const restaurantProductions = useSelector(getRestaurantProductionsSelector);
  const pagesInfo = useSelector(getRestaurantPagesInfoSelector);
  const [buttonMoreIsOpen, setButtonMoreIsOpen] = useState(true);

  return (
    <div
      className={classNames(style.nav, {
        [style.header__nav_wrapper_scroll]:
        scrollHeight >= ONE_HUNDRED_PIXEL_SCROLL,
      })}
    >
      <div className={classNames(style.header__nav_wrapper)}>
        <nav className={style.header__nav}>
          {(isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP) || (
            <Button
              isGrayTheme
              className={style.header__button_products_menu}
              type="button"
              imageRight={
                isProductsMenuActive
                  ? "property_expand_up.svg"
                  : "property_expand_down.svg"
              }
              imageHeight={24}
              imageWidth={24}
              onClick={onProductsMenuClick}
            >
              Меню
            </Button>
          )}
          <div
            className={classNames(style.list_wrapper, {
              [style.list_wrapper_scroll]:
              scrollHeight >= ONE_HUNDRED_PIXEL_SCROLL,
              [style.list_wrapper__open]: isProductsMenuActive,
              [style.list_wrapper__open_button_menu]:
              isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP,
            })}
          >
            {scrollHeight >= ONE_HUNDRED_PIXEL_SCROLL &&
              windowWidth >= ViewPorts.DESKTOP && (
                <Link to="/">
                  <ImageWrapper
                    className={style.header__logo_scroll}
                    name="logo_only_image.svg"
                    alt="Логотип тарелка, рыба, китайские палочки"
                    width={38.25}
                    height={45}
                  />
                </Link>
              )}
            <List
              isNavigate
              classNameList={classNames(style.header__products_list, {
                [style.header__products_list__open]: isProductsMenuActive,
              })}
              classNameItem={classNames(style.header__products_item, {
                [style.header__products_item__open]: isProductsMenuActive,
              })}
              items={restaurantProductions.products}
            />
            <div className={style.header__vertical_line}/>
            {scrollHeight >= ONE_HUNDRED_PIXEL_SCROLL &&
            windowWidth >= ViewPorts.DESKTOP ? (
              <>
                <List
                  isLink
                  classNameList={style.header__info_list_scroll}
                  classNameItem={style.header__info_item_scroll}
                  items={pagesInfo.pagesNames}
                />
                <Button
                  className={style.header__button_more}
                  type="button"
                  imageRight="property_expand_down.svg"
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
                    buttonMoreIsOpen && style.list_more_info,
                    !buttonMoreIsOpen && style.list_more_info_open
                  )}
                >
                  <List
                    isLink
                    classNameList={style.info_list_scroll_more_info}
                    classNameItem={style.info_item_scroll_more_info}
                    items={pagesInfo.pagesNames}
                  />
                </div>
              </>
            ) : (
              <List
                isLink
                classNameList={classNames(style.header__info_list, {
                  [style.header__info_list__open]:
                  isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP,
                })}
                classNameItem={classNames(style.header__info_item, {
                  [style.header__info_item__open]:
                  isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP,
                })}
                items={pagesInfo.pagesNames}
              />
            )}
          </div>
          <div className={style.header__button_wrapper}>
            {(isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP) || (
              <Button
                className={style.header__button_create_poke}
                type="button"
                isGrayTheme
                onClick={() => {
                  console.log("Button Create");
                }}
              >
                <Link
                  to={`/constructor`}
                  className={style.create_poke_button}
                >
                  Создать поке
                </Link>
              </Button>
            )}
            {scrollHeight >= ONE_HUNDRED_PIXEL_SCROLL &&
              windowWidth >= ViewPorts.TABLET && (
                <>
                  <MenuButtonEnter isAuth={isAuth} scroll={scrollHeight}/>
                  <div className={style.header__button_basket_wrapper}>
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

export default HeaderNavWrapper;
