import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

import { useAppDispatch } from 'app/store';

import Footer from 'widgets/Footer/Footer';
import Card from 'widgets/Card/Card';
import Recovery from 'widgets/Recovery/Recovery';
import BlockHeader from 'widgets/Header/ui/BlockHeader/BlockHeader';
import Header from 'widgets/Header/Header';

import { addLimit } from 'features/news/model/slice/newsReducer';
import { INews } from 'features/news/model/types/newsTypes';
import { getNewsSelector } from 'features/news/model/selectors/getNewsSelector';
import { openConfirmationSelector } from 'features/registration/model/selectors/openConfirmationSelector';
import { fetchNews } from 'features/news/model/services/getNews';
import UserEnter from 'features/user/ui/UserEnter/UserEnter';
import { getRegistrationSelector } from 'features/registration/model/selectors/getRegistrationSelector';

import { openModalUserEnterSelector, setUserAccountStateSelector } from 'entities/user';

import { NEWS_LIMIT } from 'shared/assets/constants/constants';
import Button from 'shared/ui/Button/Button';

import style from './News.module.scss';
import ModalRegistration from 'features/registration/ui/ModalRegistration/ModalRegistration';
import Confirmation from 'features/registration/ui/Confirmation/Confirmation';

export interface NewsProps {

}

const News: FC<NewsProps> = (props) => {
  const dispatch = useAppDispatch();
  const router = useNavigate();
  const news = useSelector(getNewsSelector);
  const registration = useSelector(getRegistrationSelector);
  const userEnter = useSelector(openModalUserEnterSelector);
  const confirmation = useSelector(openConfirmationSelector);
  const userAccount = useSelector(setUserAccountStateSelector);

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
