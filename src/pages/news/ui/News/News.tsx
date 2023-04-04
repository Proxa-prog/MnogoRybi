import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

import { useAppDispatch } from 'app/store';

import { Footer } from 'widgets/Footer';
import { Card } from 'widgets/Card';
import { Recovery } from 'widgets/Recovery';
import { Header, BlockHeader } from 'widgets/Header';

import {
  INews,
  newsActions,
  getNewsSelector,
  fetchNews,
} from 'features/news';
import {
  getRegistrationSelector,
  openConfirmationSelector,
  ModalRegistration,
  Confirmation
} from 'features/registration';
import { UserEnter } from 'features/user';
import { fetchProductions } from 'features/productions';
import { fetchPagesInfo } from 'features/restaurant';

import {
  openModalUserEnterSelector,
  setUserAccountStateSelector
} from 'entities/user';

import { Button, NEWS_LIMIT } from 'shared';

import style from './News.module.scss';

const News: FC = () => {
  const dispatch = useAppDispatch();
  const router = useNavigate();
  const news = useSelector(getNewsSelector);
  const registration = useSelector(getRegistrationSelector);
  const userEnter = useSelector(openModalUserEnterSelector);
  const confirmation = useSelector(openConfirmationSelector);
  const userAccount = useSelector(setUserAccountStateSelector);

  const handleButtonShowMore = () => {
    dispatch(newsActions.addLimit(NEWS_LIMIT));
  };

  const handleCardButtonClick = (id: string) => {
    return () => {
      router(`/${id}`)
    }
  };

  useEffect(() => {
    dispatch(fetchProductions());
    dispatch(fetchPagesInfo());
    dispatch(fetchNews(news.limit));
  }, [news.limit]);

  return (
    <>
      {registration.isOpen && <ModalRegistration />}
      {userEnter.isOpen && <UserEnter />}
      {confirmation.isOpen && <Confirmation />}
      {userAccount.userAccount.recoveryIsOpen && <Recovery />}
      <Header isAuth={userAccount.userAccount.isLogin} />
      <BlockHeader
        pageName='Новости и акции'
      >
        <div className={style.news_wrapper}>
          {
            news.newsArray.map((news: INews) => {
              const id = nanoid();

              return (
                <Card
                  className={style.news_card}
                  imageWrapperClassName={style.image_wrapper}
                  buttonText='Подробнее'
                  statuses={news.statuses}
                  isGrayTheme
                  imageUrl={news.imageUrl}
                  description={news.description}
                  header={news.header}
                  isInfo
                  key={id}
                  onClick={handleCardButtonClick(news.id)}
                />
              )
            })
          }
          <Button
            onClick={handleButtonShowMore}
            className={style.button_show_more}
            type='button'
          >
            Показать ещё
          </Button>
        </div>
      </BlockHeader>
      <Footer />
    </>
  )
}

export default News;
