import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'app/store';

import { Footer } from 'widgets/Footer';
import { Card } from 'widgets/Card';
import { Header, BlockHeader } from 'widgets/Header';
import { BasketWrapper } from "widgets/Basket";

import {
  INews,
  newsActions,
  getNewsSelector,
  fetchNews
} from 'features/getNews';

import {
  userAccountSelector,
} from 'entities/user';

import { Button, NEWS_LIMIT } from 'shared';

import style from './News.module.scss';

export const News: FC = () => {
  const dispatch = useAppDispatch();
  const router = useNavigate();
  const news = useSelector(getNewsSelector);
  const userAccount = useSelector(userAccountSelector);

  const handleButtonShowMore = () => {
    dispatch(newsActions.addLimit(NEWS_LIMIT));
  };

  const handleCardButtonClick = (id: string) => {
    return () => {
      router(`/${id}`);
    };
  };

  useEffect(() => {
    dispatch(fetchNews(news.limit));
  }, [news.limit]);

  return (
    <>
      <Header isAuth={userAccount.userAccount.isLogin} />
      <div className={style.wrapper}>
        <div className={style.inner}>
          <BlockHeader
            pageName='Новости и акции'
            className={style.paddingOff}
          />
          <div className={style.cardWrapper}>
            {news.newsArray.map((news: INews, index: number) => {

              return (
                <Card
                  className={style.card}
                  imageWrapperClassName={style.imageWrapper}
                  buttonText='Подробнее'
                  statuses={news.statuses}
                  isGrayTheme
                  imageUrl={news.imageUrl}
                  description={news.description}
                  header={news.header}
                  isInfo
                  key={index}
                  onClick={handleCardButtonClick(news.id)}
                />
              );
            })}
            <Button
              onClick={handleButtonShowMore}
              className={style.buttonShowMore}
              type='button'
            >
              Показать ещё
            </Button>
          </div>
        </div>
      </div>
      <BasketWrapper />
      <Footer isAuth={userAccount.userAccount.isLogin} />
    </>
  );
};
