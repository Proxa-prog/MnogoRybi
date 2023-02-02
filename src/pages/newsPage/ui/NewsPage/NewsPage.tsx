import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "app/store";

import { Footer } from 'widgets/Footer';
import { Header, BlockHeader } from "widgets/Header";

import { getNewsSelector, INews } from "features/news";
import { getRegistrationSelector, ModalRegistration } from "features/registration";
import { fetchMapCenter } from "features/map";
import { fetchRestaurantLocation } from "features/restaurant";

import { IMAGE_NEWS_HEIGHT } from "shared";

import style from './NewsPage.module.scss';

const NewsPage: FC = () => {
  const dispatch = useAppDispatch();
  const news = useSelector(getNewsSelector);
  const params = useParams();
  const registration = useSelector(getRegistrationSelector);

  useEffect(() => {
    dispatch(fetchRestaurantLocation());
    dispatch(fetchMapCenter());
  }, []);

  return (
    <section>
      {registration.isOpen && <ModalRegistration />}
      {
        news.newsArray.map((news: INews) => {
          if (params.newsId === news.id) {
            return (
              <>
                <Header isAuth />
                <BlockHeader
                  pageName={news.header}
                  previousPages={['Новости и акции']}
                >
                  <div key={news.id}>
                    <div
                      className={style.image}
                    >
                      <img src={`images/${news.imageUrl}`} alt="" width="100%" height={IMAGE_NEWS_HEIGHT} />
                    </div>
                    <div className={style.description}>
                      {news.text}
                    </div>

                    <span className={style.date}>{news.date}</span>
                  </div>
                </BlockHeader >
                <Footer />
              </>
            )
          }
        })
      }
    </section>
  )
}

export default NewsPage;
