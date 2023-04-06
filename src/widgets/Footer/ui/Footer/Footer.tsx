import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import classNames from "classnames";

import {
  getRestaurantPagesInfoSelector,
  getRestaurantProductionsSelector,
} from "features/restaurant";

import {
  ImageWrapper,
  List, LOGO_HEIGHT,
  LOGO_WIDTH
} from "shared";

import style from "./Footer.module.scss";

export const Footer: FC = () => {
  const restaurantProductions = useSelector(getRestaurantProductionsSelector);
  const pagesInfo = useSelector(getRestaurantPagesInfoSelector);

  return (
    <footer className={classNames(style.footer)}>
      <nav className={classNames(style.nav)}>
        <div className={classNames(style.logoWrapper)}>
          <Link to="/">
            <ImageWrapper
              className={style.footerLogo}
              alt="Логотип Много Рыбы"
              name="logo_white.svg"
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
            />
          </Link>
        </div>
        <div className={classNames(style.infoWrapper)}>
          <div className={classNames(style.products)}>
            <h3>Меню poke-room</h3>
            <List
              isNavigate
              items={restaurantProductions.products}
              classNameList={classNames(style.list)}
              classNameItem={classNames(style.item)}
            />
          </div>
          <div className={classNames(style.info)}>
            <h3>О нас</h3>
            <List
              isLink
              items={pagesInfo.footerLinksNames}
              classNameList={classNames(style.list)}
              classNameItem={classNames(style.item, { [style.infoItem]: true }, [])}
            />
          </div>
          <div className={classNames(style.contacts)}>
            <h3>Контакты</h3>
            <List
              isLink
              items={pagesInfo.restaurantAddress}
              classNameList={classNames(style.list, {
                [style.addressList]: true,
              })}
              classNameItem={classNames(style.item, {
                [style.addressItem]: true,
              })}
            />
            <a href="tel:+74852980100">8 (4852) 980-100</a>
          </div>
        </div>
      </nav>
      <div className={classNames(style.politicsWrapper)}>
        <div className={classNames(style.ourPolitics)}>
          <a className={classNames(style.ourPoliticsItem)} href="#">
            © 2022 poke-room «МногоРыбы».
          </a>
          <a className={classNames(style.ourPoliticsItem)} href="#">
            Политика обработки персональных данных
          </a>
        </div>
      </div>
    </footer>
  );
};
