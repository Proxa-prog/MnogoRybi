import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

import { addLimit, INews } from 'app/store/reducers/news';
import { useAppDispatch } from 'app/store';

import Button from 'shared/ui/Button/Button';

import Header from 'widgets/ui/Header/Header';
import BlockHeader from 'widgets/ui/BlockHeader/BlockHeader';
import Footer from 'widgets/ui/Footer/Footer';
import Card from 'widgets/ui/Card/Card';
import ModalRegistration from 'widgets/ui/ModalRegistration/ModalRegistration';

import { fetchNews } from 'entities/productions/model/services/getNews';
import { getNews } from 'entities/news/model';
import { NEWS_LIMIT } from 'entities/constants/constants';

import style from './News.module.scss';
import { getRegistration } from 'entities/registration/model';

export interface NewsProps {

}

const News: FC<NewsProps> = (props) => {
  const dispatch = useAppDispatch();
  const router = useNavigate();
  const news = useSelector(getNews);
  const registration = useSelector(getRegistration);

  const handleButtonShowMore = () => {
    dispatch(addLimit(NEWS_LIMIT));
  };

  const handleCardButtonClick = (id: string) => {
    return () => {
      router(`/${id}`)
    }
  };

  useEffect(() => {
    dispatch(fetchNews({
      dispatch: dispatch,
      limit: news.limit
    }));
  }, [news.limit]);

  return (
    <>
      {registration.isOpen && <ModalRegistration />}
      <Header isAuth />
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
