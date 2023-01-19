import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classNames from 'classnames';

import { getSiteDataSelector } from 'features/siteData/model/selectors/siteDataSelector';

import { ImageWrapper, List } from 'shared';

import style from './Footer.module.scss';

export interface FooterProps {

}

const Footer: FC<FooterProps> = (props) => {
  const siteData = useSelector(getSiteDataSelector);

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
          <Link to='/'>
            <ImageWrapper
              className={style.footer__logo}
              alt="Логотип Много Рыбы"
              name="logo_white.svg"
              width={235.9}
              height={70}
            />
          </Link>
        </div>
        <div className={classNames(
          style.footer__info_wrapper
        )}>
          <div className={classNames(
            style.footer__products
          )}>
            <h3>Меню poke-room</h3>
            <List
              isNavigate
              items={siteData.products}
              classNameList={classNames(
                style.footer__list,
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
              isLink
              items={siteData.info_footer}
              classNameList={classNames(
                style.footer__list,
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
              isLink
              items={siteData.address}
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
          <a className={classNames(
            style.header__our_politics_item
          )} href='#'>© 2022 poke-room «МногоРыбы».</a>
          <a className={classNames(
            style.header__our_politics_item
          )} href='#'>Политика обработки персональных данных</a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
