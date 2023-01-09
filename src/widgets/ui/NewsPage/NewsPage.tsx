import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { INews } from "app/store/reducers/news";

import Header from 'widgets/ui/Header/Header';
import Footer from 'widgets/ui/Footer/Footer';
import BlockHeader from "widgets/ui/BlockHeader/BlockHeader";
import ModalRegistration from "widgets/ui/ModalRegistration/ModalRegistration";

import { getNews } from "entities/news/model";
import { getRegistration } from "entities/registration/model";

import style from './NewsPage.module.scss';

interface NewsPageProps {

}

const NewsPage: FC<NewsPageProps> = () => {
  const news = useSelector(getNews);
  const params = useParams();
  const registration = useSelector(getRegistration);

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
