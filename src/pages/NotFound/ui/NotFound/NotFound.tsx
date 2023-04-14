import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { Recovery } from "widgets/Recovery";
import { Header } from "widgets/Header";
import { Footer } from "widgets/Footer";

import { UserEnter } from "features/user";
import {
  getRegistrationSelector,
  openConfirmationSelector,
  ModalRegistration,
  Confirmation
} from 'features/registration';

import {
  ModalUserDoesNotExist,
  userAccountSelector,
  userEnterSelector
} from "entities/user";

import { ImageWrapper } from "shared";

import style from './NotFound.module.scss';

export const NotFound: FC = () => {
  const registration = useSelector(getRegistrationSelector);
  const userEnter = useSelector(userEnterSelector);
  const confirmation = useSelector(openConfirmationSelector);
  const userAccount = useSelector(userAccountSelector);

  return (
    <section className={style.wrapper}>
      {registration.isOpen && <ModalRegistration />}
      {userEnter.isOpen && <UserEnter />}
      {confirmation.isOpen && <Confirmation />}
      {userAccount.userAccount.isModalRecoveryOpen && <Recovery />}
      {userAccount.userAccount.isModalUserDoesNotExist && <ModalUserDoesNotExist />}
      <Header isAuth={userAccount.userAccount.isLogin} />
      <div className={style.body}>
        <ImageWrapper
          className={style.image}
          name='in_construct.png'
          alt='Заглушка'
          width={700}
          height={500}
        />
      </div>
      <Footer isAuth={userAccount.userAccount.isLogin} />
    </section>
  );
};
