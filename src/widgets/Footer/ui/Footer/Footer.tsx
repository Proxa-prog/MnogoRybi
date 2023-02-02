import React, { FC, useEffect } from "react";
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

const Footer: FC = () => {
  const restaurantProductions = useSelector(getRestaurantProductionsSelector);
  const pagesInfo = useSelector(getRestaurantPagesInfoSelector);

  return (
    <footer className={classNames(style.footer)}>
      <nav className={classNames(style.footer__nav)}>
        <div className={classNames(style.footer__logo_wrapper)}>
          <Link to="/">
            <ImageWrapper
              className={style.footer__logo}
              alt="Логотип Много Рыбы"
              name="logo_white.svg"
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
            />
          </Link>
        </div>
        <div className={classNames(style.footer__info_wrapper)}>
          <div className={classNames(style.footer__products)}>
            <h3>Меню poke-room</h3>
            <List
              isNavigate
              items={restaurantProductions.products}
              classNameList={classNames(style.footer__list)}
              classNameItem={classNames(style.footer__item)}
            />
          </div>
          <div className={classNames(style.footer__info)}>
            <h3>О нас</h3>
            <List
              isLink
              items={pagesInfo.footerLinksNames}
              classNameList={classNames(style.footer__list)}
              classNameItem={classNames(style.footer__item, {
                [style.footer__info_item]: true,
              })}
            />
          </div>
          <div className={classNames(style.footer__contacts)}>
            <h3>Контакты</h3>
            <List
              isLink
              items={pagesInfo.restaurantAddress}
              classNameList={classNames(style.footer__list, {
                [style.footer__address_list]: true,
              })}
              classNameItem={classNames(style.footer__item, {
                [style.footer__address_item]: true,
              })}
            />
            <a href="tel:+74852980100">8 (4852) 980-100</a>
          </div>
        </div>
      </nav>
      <div className={classNames(style.footer__politics_wrapper)}>
        <div className={classNames(style.footer__our_politics)}>
          <a className={classNames(style.header__our_politics_item)} href="#">
            © 2022 poke-room «МногоРыбы».
          </a>
          <a className={classNames(style.header__our_politics_item)} href="#">
            Политика обработки персональных данных
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
