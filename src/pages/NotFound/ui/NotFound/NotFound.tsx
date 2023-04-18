import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { Header } from "widgets/Header";
import { Footer } from "widgets/Footer";

import {
  userAccountSelector,
} from "entities/user";

import { ImageWrapper } from "shared";

import style from './NotFound.module.scss';

export const NotFound: FC = () => {
  const userAccount = useSelector(userAccountSelector);

  return (
    <section className={style.wrapper}>
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
