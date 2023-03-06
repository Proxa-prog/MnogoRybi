import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import {useAppDispatch} from "app/store";

import {BlockHeader, Header} from "widgets/Header";
import {ConstructorCard} from "widgets/ConstructorCard";
import {Footer} from "widgets/Footer";

import {fetchProductions} from "features/productions";
import {fetchPagesInfo, fetchRestaurantProductions} from "features/restaurant";

import {setUserAccountStateSelector} from "entities/user";
import {ImageWrapper} from "shared";

import style from './Constructor.module.scss';


const basis = {
  productsType: [
    'Рис',
    'Киноа',
    'Удон',
    'Киноа+рис',
    'Айсберг',
    'Соба',
  ],
  stepNumber: 1,
  description: 'Выберите основу',
};

const protein = {
  productsType: [
    'Тунец',
    'Лосось',
    'Курица',
    'Свинина',
    'Креветки',
    'Тофу',
    'Краб',
    'Кальмар',
    'Коктейльные креветки',
    'Угорь',
    'Индейка',
    'Морской гребешок',
  ],
  stepNumber: 2,
  description: 'Протеин',
};

const sauce = {
  productsType: [
    'Терияки',
    'Васаби',
    'Японский',
    'Гуакамоле',
    'Спайс',
    'Манго маракуйа',
    'Цезарь',
    'Ореховый',
    'Сладкий чили',
    'Медово-горчичный',
  ],
  stepNumber: 5,
  description: 'Соус',
};

const Constructor = () => {
  const dispatch = useAppDispatch();
  const userAccount = useSelector(setUserAccountStateSelector);

  useEffect(() => {
    dispatch(fetchProductions());
    dispatch(fetchRestaurantProductions());
    dispatch(fetchPagesInfo());
  }, []);

  return (
    <div>
      <Header isAuth={userAccount.isLogin}/>
      <BlockHeader
        pageName='Конструктор поке'
      >
        <section className={style.constructor_page_wrapper}>
          <h2>
            <span className={style.blue_header}>Соберите ваш</span>
            {/*<span className={style.yellow_header}> идеальный&nbsp;поке за&nbsp;6&nbsp;шагов</span>*/}
            <span className={style.yellow_header}> идеальный поке за 6 шагов</span>
            <ImageWrapper
              className={style.arrow}
              name='desktop_constructor_arrow.png'
              alt='sdf'
              width={1155}
              height={75.5}
            />
          </h2>
          <div className={style.constructor_inner}>
            <ConstructorCard {...basis} />
            <ConstructorCard {...protein} />
            <ConstructorCard {...sauce} />
          </div>
        </section>
      </BlockHeader>
      <Footer/>
    </div>
  );
};

export default Constructor;
