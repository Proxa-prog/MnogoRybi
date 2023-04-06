import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Footer } from 'widgets/Footer';
import { Header, BlockHeader } from 'widgets/Header';

import { getNewsSelector, INews } from 'features/news';
import { getRegistrationSelector, ModalRegistration } from 'features/registration';

import { IMAGE_NEWS_HEIGHT } from 'shared';

import style from './NewsPage.module.scss';

export const NewsPage: FC = () => {
  const news = useSelector(getNewsSelector);
  const params = useParams();
  const registration = useSelector(getRegistrationSelector);

  return (
    <section>
      {registration.isOpen && <ModalRegistration />}
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
              <Footer />
            </>
          );
        }
      })}
    </section>
  );
};
