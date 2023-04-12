import React, {FC, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Footer } from 'widgets/Footer';
import { Header, BlockHeader } from 'widgets/Header';
import { Recovery } from "widgets/Recovery";
import { BasketWrapper } from "widgets/Basket";

import { UserEnter } from "features/user";
import {
  getRegistrationSelector,
  openConfirmationSelector,
  ModalRegistration,
  Confirmation
} from 'features/registration';
import { getNewsSelector, INews } from 'features/news';

import {
  ModalUserDoesNotExist,
  userAccountSelector,
  userEnterSelector
} from "entities/user";

import { IMAGE_NEWS_HEIGHT } from 'shared';

import style from './NewsPage.module.scss';

export const NewsPage: FC = () => {
  const news = useSelector(getNewsSelector);
  const params = useParams();
  const registration = useSelector(getRegistrationSelector);
  const userEnter = useSelector(userEnterSelector);
  const confirmation = useSelector(openConfirmationSelector);
  const userAccount = useSelector(userAccountSelector);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section>
      {registration.isOpen && <ModalRegistration />}
      {userEnter.isOpen && <UserEnter />}
      {confirmation.isOpen && <Confirmation />}
      {userAccount.userAccount.isModalRecoveryOpen && <Recovery />}
      {userAccount.userAccount.isModalUserDoesNotExist && <ModalUserDoesNotExist />}
      {news.newsArray.map((news: INews) => {
        if (params.newsId === news.id) {

          return (
            <>
              <Header isAuth />
              <BlockHeader pageName={news.header} previousPages={['Новости и акции']}>
                <div key={news.id}>
                  <div className={style.image}>
                    <img
                      src={`images/${news.imageUrl}`}
                      alt=''
                      width='100%'
                      height={IMAGE_NEWS_HEIGHT}
                    />
                  </div>
                  <div className={style.description}>{news.text}</div>
                  <span className={style.date}>{news.date}</span>
                </div>
              </BlockHeader>
              <BasketWrapper />
              <Footer />
            </>
          );
        }
      })}
    </section>
  );
};
