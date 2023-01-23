import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "app/store";

import Footer from 'widgets/Footer/Footer';
import Header from "widgets/Header/Header";
import BlockHeader from "widgets/Header/ui/BlockHeader/BlockHeader";

import { getNewsSelector, INews } from "features/news";
import { getRegistrationSelector, ModalRegistration } from "features/registration";
import { fetchMapCenter } from "features/map";
import { fetchRestaurantLocation } from "features/restaurant";

import style from './NewsPage.module.scss';

interface NewsPageProps {

}

const NewsPage: FC<NewsPageProps> = () => {
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
                      <img src={`images/${news.imageUrl}`} alt="" width="100%" height={450} />
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
