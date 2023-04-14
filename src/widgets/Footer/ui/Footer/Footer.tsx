import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { useAppDispatch } from 'app/store';

import {
  getRestaurantPagesInfoSelector,
  getRestaurantProductionsSelector,
} from 'features/restaurant';
import { registrationActions } from 'features/registration';

import { userEnterActions, userEnterSelector } from 'entities/user';

import {
  Button,
  ImageWrapper,
  List,
  LOGO_HEIGHT,
  LOGO_WIDTH,
} from 'shared';

import style from './Footer.module.scss';

interface IFooter {
  isAuth?: boolean;
}

export const Footer: FC<IFooter> = (props) => {
  const { isAuth } = props;
  const restaurantProductions = useSelector(getRestaurantProductionsSelector);
  const pagesInfo = useSelector(getRestaurantPagesInfoSelector);

  const userEnter = useSelector(userEnterSelector);
  const dispatch = useAppDispatch();

  const handleCheckboxAgreementChange = () => {
    dispatch(registrationActions.changeIsOpenRegistration(true));
    dispatch(userEnterActions.changeIsOpenUserEnter(userEnter.isOpen));
  };

  return (
    <footer className={classNames(style.footer)}>
      <nav className={classNames(style.nav)}>
        <div className={classNames(style.logoWrapper)}>
          <Link to='/'>
            <ImageWrapper
              className={style.footerLogo}
              alt='Логотип Много Рыбы'
              name='logo_white.svg'
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
              classNameList={classNames(style.list, style.listWithPersonalAreaLink)}
              classNameItem={classNames(style.item, { [style.infoItem]: true }, [])}
            />
            {isAuth ? (
              <Link
                to='/personalArea'
                className={style.personalAreaLink}
              >
                Личный кабинет
              </Link>
            ) : (
              <Button
                className={style.buttonEnter}
                type='button'
                isGrayTheme
                onClick={handleCheckboxAgreementChange}
              >
                Личный кабинет
              </Button>
            )}
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
            <a href='tel:+74852980100'>8 (4852) 980-100</a>
          </div>
        </div>
      </nav>
      <div className={classNames(style.politicsWrapper)}>
        <div className={classNames(style.ourPolitics)}>
          <a className={classNames(style.ourPoliticsItem)} href='#'>
            © 2022 poke-room «МногоРыбы».
          </a>
          <a className={classNames(style.ourPoliticsItem)} href='#'>
            Политика обработки персональных данных
          </a>
        </div>
      </div>
    </footer>
  );
};
