import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Footer } from 'widgets/Footer';
import { Header, BlockHeader } from 'widgets/Header';
import { BasketWrapper } from "widgets/Basket";

import { getNewsSelector, INews } from 'features/getNews';

import {
  userAccountSelector,
} from "entities/user";

import { IMAGE_NEWS_HEIGHT } from 'shared';

import style from './NewsPage.module.scss';

export const NewsPage: FC = () => {
  const news = useSelector(getNewsSelector);
  const params = useParams();
  const userAccount = useSelector(userAccountSelector);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section>
      {news.newsArray.map((news: INews) => {
        if (params.newsId === news.id) {

          return (
            <section key={news.id}>
              <Header isAuth={userAccount.userAccount.isLogin} />
              <BlockHeader
                pageName={news.header}
                previousPages={['Новости и акции']}
              >
                <div>
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
              <Footer isAuth={userAccount.userAccount.isLogin} />
            </section>
          );
        }
      })}
    </section>
  );
};
