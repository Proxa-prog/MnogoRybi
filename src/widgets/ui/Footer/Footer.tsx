import React, { FC } from 'react';

import classNames from 'classnames';

import ImageWrapper from 'shared/ui/ImageWrapper/ImageWrapper';
import List from 'shared/ui/List/List';

import {
  ADDRESS,
  INFO_FOOTER,
  PRODUCTS
} from 'entities/constants/constants';

import style from './Footer.module.scss';

export interface FooterProps {

}

const Footer: FC<FooterProps> = (props) => {

  return (
    <footer className={classNames(
      style.footer
    )}>
      <nav className={classNames(
        style.footer__nav
      )}>
        <div className={classNames(
          style.footer__logo_wrapper
        )}>
          <ImageWrapper
            className={style.footer__logo}
            alt="Логотип Много Рыбы"
            name="logo_white.svg"
            width={236}
            height={70}
          />
        </div>
        <div className={classNames(
          style.footer__info_wrapper
        )}>
          <div className={classNames(
            style.footer__products
          )}>
            <h3>Меню poke-room</h3>
            <List
              items={PRODUCTS}
              classNameList={classNames(
                style.footer__list,
                // { [style.footer__products_list]: isProductsMenuActive }
              )}
              classNameItem={classNames(
                style.footer__item
              )}
            />
          </div>
          <div className={classNames(
            style.footer__info
          )}>
            <h3>О нас</h3>
            <List
              items={INFO_FOOTER}
              classNameList={classNames(
                style.footer__list,
                // { [style.footer__info_list]: true }
              )}
              classNameItem={classNames(
                style.footer__item,
                { [style.footer__info_item]: true }
              )}
            />
          </div>
          <div className={classNames(
            style.footer__contacts
          )}>
            <h3>Контакты</h3>
            <List
              items={ADDRESS}
              classNameList={classNames(
                style.footer__list,
                { [style.footer__address_list]: true }
              )}
              classNameItem={classNames(
                style.footer__item,
                { [style.footer__address_item]: true }
              )}
            />
            <a href="tel:+74852980100">8 (4852) 980-100</a>
          </div>
        </div>
      </nav>
      <div className={classNames(
        style.footer__politics_wrapper
      )}>
        <div className={classNames(
          style.footer__our_politics
        )}>
          <a href='#'>© 2022 poke-room «МногоРыбы».</a>
          <a href='#'>Политика обработки персональных данных</a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
