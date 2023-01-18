import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


import Footer from 'widgets/Footer/Footer';
import Header from "widgets/Header/Header";
import BlockHeader from "widgets/Header/ui/BlockHeader/BlockHeader";

import { INews } from "features/news/model/types/newsTypes";
import { getNewsSelector } from "features/news/model/selectors/getNewsSelector";
import { getRegistrationSelector } from "features/registration/model/selectors/getRegistrationSelector";

import style from './NewsPage.module.scss';
import ModalRegistration from "features/registration/ui/ModalRegistration/ModalRegistration";

interface NewsPageProps {

}

const NewsPage: FC<NewsPageProps> = () => {
  const news = useSelector(getNewsSelector);
  const params = useParams();
  const registration = useSelector(getRegistrationSelector);

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
