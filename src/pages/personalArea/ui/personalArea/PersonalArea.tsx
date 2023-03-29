import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import classNames from "classnames";

import { useAppDispatch } from "app/store";

import { Footer } from "widgets/Footer";
import { Recovery } from "widgets/Recovery";
import { Header, } from "widgets/Header";

import {
  getRegistrationSelector,
  openConfirmationSelector,
  ModalRegistration,
  Confirmation,
} from "features/registration";
import { UserEnter } from "features/user";
import {
  fetchPagesInfo,
  fetchRestaurantProductions,
  getRestaurantPagesInfoSelector
} from "features/restaurant";

import {
  changeIsAddNewAddressOpen,
  logoutUserAccount,
  openModalUserEnterSelector,
  removeDeliveryAddress,
  setUserAccountStateSelector,
} from "entities/user";
import AddDeliveryAddress from "entities/user/ui/AddDeliveryAddress/AddDeliveryAddress";

import {Button, Checkbox, Input, StatusMarker} from "shared";

import style from "./PersonalArea.module.scss";

interface IPersonalAreaPagesLinks {
  name: string;
  id: string;
  isCurrent?: boolean;
}
const PersonalArea: FC = () => {
  const dispatch = useAppDispatch();
  const router = useNavigate();
  const registration = useSelector(getRegistrationSelector);
  const userEnter = useSelector(openModalUserEnterSelector);
  const confirmation = useSelector(openConfirmationSelector);
  const userAccount = useSelector(setUserAccountStateSelector);
  const restaurant = useSelector(getRestaurantPagesInfoSelector);
  const [isButtonGenderActive, setIsButtonGenderActive] = useState(true);

  const pageLinks: IPersonalAreaPagesLinks[] = [
    { name: "Личные данные", id: "personalData", isCurrent: true, },
    { name: "Мои заказы", id: "myOrders" },
  ];

  const handleButtonRemoveNewAddress = (deliveryAddress: string) => {
    dispatch(removeDeliveryAddress(deliveryAddress));
  };

  const handleButtonExitOnClick = () => {
    dispatch(logoutUserAccount());
  };

  const handleButtonOpenModalAddNewAddress = () => {
    dispatch(changeIsAddNewAddressOpen());
  };

  useEffect(() => {
    dispatch(fetchRestaurantProductions());
    dispatch(fetchPagesInfo());
  }, []);
  console.log('userAccount', userAccount);
  return (
    <>
      <Header isAuth={userAccount.userAccount.isLogin} />
      {registration.isOpen && <ModalRegistration />}
      {userEnter.isOpen && <UserEnter />}
      {confirmation.isOpen && <Confirmation />}
      {userAccount.userAccount.recoveryIsOpen && <Recovery />}
      {
        userAccount.userAccount.isLogin
        && userAccount.userAccount.isAddNewAddressOpen
        && <AddDeliveryAddress />
      }
      <section className={style.wrapper}>
        <div className={style.links_wrapper}>
          {
            pageLinks.map((item: IPersonalAreaPagesLinks) => (
              <Link
                className={classNames(
                  style.page_link,
                  { [style.page_link_current]: item.isCurrent })}
                to={item.id}
              >
                {item.name}
              </Link>
            ))
          }
        </div>
        <div className={style.myDataWrapper}>
          <div className={style.myData}>
            <h3>Мои данные</h3>
            <Input
              className={style.inputMyData}
              required
              placeholder="Иванов Иван Иванович"
              label="Имя"
              name="Имя"
            />
            <Input
              className={style.inputMyData}
              required
              placeholder="+7 986 456 75 34"
              label="Телефон"
              name="Телефон"
            />
            <Input
              className={style.inputMyData}
              required
              placeholder="ivanov@mail.ru"
              label="Почта"
              name="Почта"
            />
            <Input
              className={style.inputMyData}
              classNameWrapper={style.dateWrapper}
              placeholder="__.__.____"
              label="Дата рождения"
              name="Дата рождения"
            />
            <div className={style.gender_wrapper}>
              <h4>Пол</h4>
              <div className={style.button_gender_wrapper}>
                <Button
                  className={classNames(
                    style.button_gender_man,
                    { [style.button_gender_man_active]: isButtonGenderActive }
                  )}
                  type="button"
                  onClick={() => {setIsButtonGenderActive(prev => !prev)}}
                >
                  Мужской
                </Button>
                <Button
                  className={classNames(
                    style.button_gender_woman,
                    { [style.button_gender_woman_active]: !isButtonGenderActive }

                  )}
                  type="button"
                  onClick={() => {setIsButtonGenderActive(prev => !prev)}}
                >
                  Женский
                </Button>
              </div>
            </div>
          </div>
          <div className={style.deliveryAddress}>
            <h3>Адреса доставки</h3>
            <div>
              {
                userAccount.userData.deliveryAddress.map((item) => {
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
                        classNameLabel={style.address_label}
                      />
                      {
                        item === 'Ярославль, Свободы 52/39'
                        &&
                        <div className={style.statusMarkerWrapper}>
                          <StatusMarker
                            className={style.statusMarker}
                            children='По умолчанию'
                          />
                        </div>
                      }
                      <div className={style.buttonCloseWrapper} onClick={() => {
                        handleButtonRemoveNewAddress(item);
                        console.log('click')}}>
                        {/*<Svg name="dell_fill" width="24" height="24" />*/}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 13.4142L8.70711 16.7071L7.29289 15.2929L10.5858 12L7.29289 8.70711L8.70711 7.29289L12 10.5858L15.2929 7.29289L16.7071 8.70711L13.4142 12L16.7071 15.2929L15.2929 16.7071L12 13.4142Z" fill="#414042"/>
                        </svg>
                        {/*<DellFill />*/}
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div>
              <Button
                type="button"
                color="blue"
                className={style.buttonAddNewAddress}
                onClick={handleButtonOpenModalAddNewAddress}
              >
                Добавить новый адрес
              </Button>
            </div>
          </div>
        </div>
        <div className={style.button_exit_wrapper}>
          <Button
            className={style.button_exit}
            type="button"
            isGrayTheme
            onClick={handleButtonExitOnClick}
          >
            Выйти из личного кабинета
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PersonalArea;
