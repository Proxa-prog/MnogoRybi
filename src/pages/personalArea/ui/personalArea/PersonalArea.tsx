import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";

import { useAppDispatch } from "app/store";

import { Footer } from "widgets/Footer";
import { Recovery } from "widgets/Recovery";
import { Header, } from "widgets/Header";

import { getNewsSelector } from "features/news";
import {
  getRegistrationSelector,
  openConfirmationSelector,
  ModalRegistration,
  Confirmation,
} from "features/registration";
import { UserEnter } from "features/user";

import {
  openModalUserEnterSelector,
  setUserAccountStateSelector,
} from "entities/user";

import { Button, Input } from "shared";

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

  const [isButtonGenderActive, setIsButtonGenderActive] = useState(true);
  const pageLinks: IPersonalAreaPagesLinks[] = [
    { name: "Личные данные", id: "personalData", isCurrent: true, },
    { name: "Мои заказы", id: "myOrders" },
  ];
  return (
    <>
      {registration.isOpen && <ModalRegistration />}
      {userEnter.isOpen && <UserEnter />}
      {confirmation.isOpen && <Confirmation />}
      {userAccount.recoveryIsOpen && <Recovery />}
      <Header isAuth={userAccount.isLogin} />
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
          <div>
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
        <div></div>
        <div></div>
      </section>
      <Footer />
    </>
  );
};

export default PersonalArea;
