import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import {useAppDispatch} from "app/store";

import {BlockHeader, Header} from "widgets/Header";
import {ConstructorCard} from "widgets/ConstructorCard";
import {Footer} from "widgets/Footer";

import {fetchProductions, getIngredientsSelector} from "features/productions";
import {fetchPagesInfo, fetchRestaurantProductions} from "features/restaurant";

import {setUserAccountStateSelector} from "entities/user";
import {ImageWrapper, Select} from "shared";
import CheckboxListWrapper from "../../../../widgets/ConstructorCard/ui/CheckboxListWrapper/CheckboxListWrapper";

import {fetchIngredients} from "../../../../features/productions/model/services/getIngredients";
import style from './Constructor.module.scss';
import AddCreatedPoke from "../../../../widgets/ConstructorCard/ui/AddCreatedPoke/AddCreatedPoke";

const Constructor = () => {
  const dispatch = useAppDispatch();
  const userAccount = useSelector(setUserAccountStateSelector);
  const ingredients = useSelector(getIngredientsSelector);

  useEffect(() => {
    dispatch(fetchProductions());
    dispatch(fetchRestaurantProductions());
    dispatch(fetchPagesInfo());
    dispatch(fetchIngredients());
  }, []);
  // console.log(ingredients);
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
            <ConstructorCard>
              <CheckboxListWrapper
                {...ingredients.basis}
                isCircleCheckbox
              />
            </ConstructorCard>
            <ConstructorCard>
              <CheckboxListWrapper
                {...ingredients.protein}
                isCircleCheckbox
              />
            </ConstructorCard>
            <ConstructorCard className={style.withoutMargin}>
              <CheckboxListWrapper
                {...ingredients.fillers}
              />
            </ConstructorCard>
            <ConstructorCard>
              <CheckboxListWrapper
                {...ingredients.topping}
              />
            </ConstructorCard>
            <ConstructorCard>
              <CheckboxListWrapper
                {...ingredients.sauce}
                isCircleCheckbox
              />
            </ConstructorCard>
            <ConstructorCard>
              <CheckboxListWrapper
                {...ingredients.crunch}
                isCircleCheckbox
              />
            </ConstructorCard>
            <ConstructorCard>
              <CheckboxListWrapper
                selectListArray={ingredients}
                isSelectList
                {...ingredients.additionally}
              />
            </ConstructorCard>
            <AddCreatedPoke />
          </div>
        </section>
      </BlockHeader>
      <Footer/>
    </div>
  );
};

export default Constructor;
