import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

import { useAppDispatch } from 'app/store';

import { addLimit } from 'features/news/model/slice/newsReducer';
import { INews } from 'features/news/model/types/newsTypes';
import { getNewsSelector } from 'features/news/model/selectors/getNewsSelector';
import Confirmation from 'features/Confirmation/Confirmation';
import { openConfirmationSelector } from 'features/Confirmation/model/selectors/openConfirmationSelector';

import Header from 'widgets/ui/Header/Header';
import BlockHeader from 'widgets/ui/Header/ui/BlockHeader/BlockHeader';
import Footer from 'widgets/ui/Footer/Footer';
import Card from 'widgets/ui/Card/Card';
import ModalRegistration from 'widgets/ui/ModalRegistration/ModalRegistration';
import UserEnter from 'widgets/ui/UserEnter/UserEnter';
import Recovery from 'widgets/ui/Recovery/Recovery';

import { fetchNews } from 'features/news/model/services/getNews';
import { NEWS_LIMIT } from 'entities/constants/constants';
import { getRegistration } from 'entities/registration/model';
import { openModalUserEnter } from 'entities/userEnter/model';
import { setUserAccountState } from 'entities/userAccount/model/userAccount';

import Button from 'shared/ui/Button/Button';

import style from './News.module.scss';

export interface NewsProps {

}

const News: FC<NewsProps> = (props) => {
  const dispatch = useAppDispatch();
  const router = useNavigate();
  const news = useSelector(getNewsSelector);
  const registration = useSelector(getRegistration);
  const userEnter = useSelector(openModalUserEnter);
  const confirmation = useSelector(openConfirmationSelector);
  const userAccount = useSelector(setUserAccountState);

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
      {userEnter.isOpen && <UserEnter />}
      {confirmation.isOpen && <Confirmation />}
      {userAccount.recoveryIsOpen && <Recovery />}
      <Header isAuth={userAccount.isLogin} />
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
