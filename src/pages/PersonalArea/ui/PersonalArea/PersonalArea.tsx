import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import classNames from 'classnames';

import { useAppDispatch } from 'app/store';

import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { BasketWrapper } from "widgets/Basket";

import {
  userAccountActions,
  userAccountSelector,
  AddDeliveryAddress,
  IPersonalAreaPagesLinks,
  userEnterSelector,
  removeDeliveryAddressOnServer,
} from 'entities/user';

import {
  Button,
  Checkbox,
  Input,
  StatusMarker,
} from 'shared';

import style from './PersonalArea.module.scss';

export const PersonalArea: FC = () => {
  const dispatch = useAppDispatch();
  const userEnter = useSelector(userEnterSelector);
  const userAccount = useSelector(userAccountSelector);
  const [isButtonGenderActive, setIsButtonGenderActive] = useState(true);

  const handleButtonRemoveNewAddress = (deliveryAddress: string) => {
    dispatch(removeDeliveryAddressOnServer({
      userEmail: userEnter.userAccount.email ?? '',
      deliveryAddress: deliveryAddress,
    }));
    dispatch(userAccountActions.removeDeliveryAddress(deliveryAddress));
  };

  const handleButtonExitOnClick = () => {
    dispatch(userAccountActions.logoutUserAccount());
  };

  const handleButtonOpenModalAddNewAddress = () => {
    dispatch(userAccountActions.changeIsModalAddNewAddressOpen());
  };

  const handleLinkClick = (id: string) => {
    dispatch(userAccountActions.changePersonalAreaLinkIsCurrent(id));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header isAuth={userAccount.userAccount.isLogin} />
      {userAccount.userAccount.isLogin && userAccount.userAccount.isModalAddNewAddressOpen && (
        <AddDeliveryAddress />
      )}
      <section className={style.wrapper}>
        <div className={style.inner}>
          <div className={style.linksWrapper}>
            {userAccount.personalAreaLinks &&
              userAccount.personalAreaLinks.map((item: IPersonalAreaPagesLinks) => {

                return (
                  <Link
                    to={`/${item.id}`}
                    type='button'
                    onClick={() => {
                      handleLinkClick(item.id);
                    }}
                    className={classNames(style.pageLink, {
                      [style.pageLinkCurrent]: item.isCurrent,
                    })}
                  >
                    {item.name}
                  </Link>
                )
              })}
          </div>
          <div className={style.myDataWrapper}>
            <div className={style.myData}>
              <h3>Мои данные</h3>
              <Input
                className={style.inputMyData}
                required
                placeholder='Иванов Иван Иванович'
                label='Имя'
                name='Имя'
              />
              <Input
                className={style.inputMyData}
                required
                placeholder='+7 986 456 75 34'
                label='Телефон'
                name='Телефон'
              />
              <Input
                className={style.inputMyData}
                required
                placeholder='ivanov@mail.ru'
                label='Почта'
                name='Почта'
              />
              <Input
                className={style.inputMyData}
                classNameWrapper={style.dateWrapper}
                placeholder='__.__.____'
                label='Дата рождения'
                name='Дата рождения'
              />
              <div className={style.genderWrapper}>
                <h4>Пол</h4>
                <div className={style.buttonGenderWrapper}>
                  <Button
                    className={classNames(style.buttonGenderMan, {
                      [style.buttonGenderManActive]: isButtonGenderActive,
                    })}
                    type='button'
                    onClick={() => {
                      setIsButtonGenderActive((prev) => !prev);
                    }}
                  >
                    Мужской
                  </Button>
                  <Button
                    className={classNames(style.buttonGenderWoman, {
                      [style.buttonGenderWomanActive]: !isButtonGenderActive,
                    })}
                    type='button'
                    onClick={() => {
                      setIsButtonGenderActive((prev) => !prev);
                    }}
                  >
                    Женский
                  </Button>
                </div>
              </div>
            </div>
            <div className={style.deliveryAddress}>
              <h3>Адреса доставки</h3>
              <div>
                {userAccount.userData.deliveryAddress.map((item) => {
                  const id = nanoid();

                  return (
                    <div className={style.checkboxWrapper}>
                      <Checkbox
                        key={id}
                        onChange={() => {}}
                        isCircle
                        className={style.checkbox}
                        label={item}
                        id={id}
                        classNameLabel={style.addressLabel}
                      />
                      {item === 'Ярославль, ул. Льва Толстова, 56, кв. 36' && (
                        <div className={style.statusMarkerWrapper}>
                          <StatusMarker
                            className={style.statusMarker}
                            children='По умолчанию'
                          />
                        </div>
                      )}
                      <div
                        className={style.buttonCloseWrapper}
                        onClick={() => {
                          handleButtonRemoveNewAddress(item);
                        }}
                      >
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 13.4142L8.70711 16.7071L7.29289 15.2929L10.5858 12L7.29289 8.70711L8.70711 7.29289L12 10.5858L15.2929 7.29289L16.7071 8.70711L13.4142 12L16.7071 15.2929L15.2929 16.7071L12 13.4142Z'
                            fill='#414042'
                          />
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <Button
                  type='button'
                  color='blue'
                  className={style.buttonAddNewAddress}
                  onClick={handleButtonOpenModalAddNewAddress}
                >
                  Добавить новый адрес
                </Button>
              </div>
            </div>
          </div>
          <div className={style.buttonExitWrapper}>
            <Button
              className={style.buttonExit}
              type='button'
              isGrayTheme
              onClick={handleButtonExitOnClick}
            >
              <Link
                to='/'
                className={style.linkExit}
              >
                Выйти из личного кабинета
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <BasketWrapper />
      <Footer isAuth={userAccount.userAccount.isLogin} />
    </>
  );
};
