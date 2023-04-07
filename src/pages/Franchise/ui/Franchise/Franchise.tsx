import React, { FC, useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'app/store';

import { advantages, FranchiseAdvantages } from 'pages/Franchise';

import { Footer } from 'widgets/Footer';
import { BlockHeader, Header } from 'widgets/Header';
import { Recovery } from "widgets/Recovery";

import { UserEnter } from "features/user";
import {
  getRegistrationSelector,
  openConfirmationSelector,
  ModalRegistration,
  Confirmation
} from 'features/registration';
import { fetchPagesInfo, fetchRestaurantProductions } from 'features/restaurant';
import { fetchProductions } from 'features/productions';

import {userAccountSelector, userEnterSelector} from 'entities/user';

import { Button, ImageWrapper } from 'shared';

import style from './Franchise.module.scss';

export const Franchise: FC = () => {
  const dispatch = useAppDispatch();
  const registration = useSelector(getRegistrationSelector);
  const userEnter = useSelector(userEnterSelector);
  const confirmation = useSelector(openConfirmationSelector);
  const userAccount = useSelector(userAccountSelector);

  useEffect(() => {
    dispatch(fetchProductions());
    dispatch(fetchRestaurantProductions());
    dispatch(fetchPagesInfo());
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {registration.isOpen && <ModalRegistration />}
      {userEnter.isOpen && <UserEnter />}
      {confirmation.isOpen && <Confirmation />}
      {userAccount.userAccount.isModalRecoveryOpen && <Recovery />}
      <Header isAuth={userAccount.userAccount.isLogin} />
      <section className={style.wrapper}>
        <div className={style.inner}>
          <BlockHeader pageName='Франшиза' className={style.blockHeader} />
          <div className={style.franchiseWrapper}>
            {advantages.map((item) => {
              const id = nanoid();

              return (
                <FranchiseAdvantages
                  key={id}
                  header={item.header}
                  description={item.description}
                  color={item.color}
                />
              );
            })}
          </div>
          <div className={style.previewWrapper}>
            <ImageWrapper
              name='chiefsCooker.jpg'
              alt='Шеф повара'
              width={630}
              height={420}
            />
            <div className={style.franchiseInfo}>
              <h3 className={style.previewHeader}>
                Открой собственный poke-room «Много Рыбы» на условиях франчайзи в вашем городе.
              </h3>
              <span className={style.name}>Евгений Хегай</span>
              <span className={style.phone}>+7 (960) 538-59-67</span>
              <Button type='button' color='yellow'>
                Оставить заявку
              </Button>
            </div>
          </div>
          <div className={style.conditions}>
            <div className={style.conditionsHeaderWrapper}>
              <h3 className={style.conditionsHeader}>Условия</h3>
            </div>
            <div className={style.conditionsTextWrapper}>
              <p className={style.conditionsText}>
                Здоровый и вкусный завтрак, быстрый обед или ужин со свежими и экзотическими
                ароматами. В "Много Рыбы" у нас есть все! Ознакомьтесь с нашим меню,
                разработанным искусными шеф-поварами с использованием настоящих сезонных
                ингредиентов, и полюбите вкуснейший Poke Bowl. Либо выберите одно из наших
                фирменных блюд, либо создайте свой идеальный Poke!
              </p>
              <p className={style.conditionsText}>
                Здоровый и вкусный завтрак, быстрый обед или ужин со свежими и экзотическими
                ароматами. В "Много Рыбы" у нас есть все! Ознакомьтесь с нашим меню,
                разработанным искусными шеф-поварами с использованием настоящих сезонных
                ингредиентов, и полюбите вкуснейший Poke Bowl. Либо выберите одно из наших
                фирменных блюд, либо создайте свой идеальный Poke!
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
