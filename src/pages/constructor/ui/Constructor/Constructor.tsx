import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import {useAppDispatch} from "app/store";

import {BlockHeader, Header} from "widgets/Header";
import {ConstructorCard} from "widgets/ConstructorCard";
import {Footer} from "widgets/Footer";

import {fetchProductions, getIngredientsSelector} from "features/productions";
import {fetchPagesInfo, fetchRestaurantProductions} from "features/restaurant";

import {setUserAccountStateSelector} from "entities/user";
import CheckboxListWrapper from "widgets/ConstructorCard/ui/CheckboxListWrapper/CheckboxListWrapper";

import {fetchIngredients} from "features/productions/model/services/getIngredients";

import AddCreatedPoke from "widgets/ConstructorCard/ui/AddCreatedPoke/AddCreatedPoke";
import {
  baseProductSelector,
  changeBaseProductType,
  changeCrunchChecked,
  changeCrunchType, changeFillers,
  changeFillersType,
  changeIsBaseProductChecked,
  changeIsFillerChecked,
  changeProteinChecked,
  changeProteinType,
  changeSauceChecked,
  changeSauceType,
  changeToppingChecked,
  changeToppingType,
  constructorSelector,
  crunchSelector, fillersSelector,
  fillersTypeSelector,
  proteinSelector,
  sauceSelector,
  toppingSelector,
} from "entities/constructor";

import style from './Constructor.module.scss';

const Constructor = () => {
  const dispatch = useAppDispatch();
  const userAccount = useSelector(setUserAccountStateSelector);
  const ingredients = useSelector(getIngredientsSelector);
  const fillersType = useSelector(fillersTypeSelector);
  const fillers = useSelector(fillersSelector);
  const baseProduct = useSelector(baseProductSelector);
  const sauce = useSelector(sauceSelector);
  const protein = useSelector(proteinSelector);
  const topping = useSelector(toppingSelector);
  const crunch = useSelector(crunchSelector);
  const constructor = useSelector(constructorSelector);

  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(fetchProductions());
    dispatch(fetchRestaurantProductions());
    dispatch(fetchPagesInfo());
  }, []);
  console.log(fillers);
  return (
    <div>
      <Header isAuth={userAccount.isLogin}/>
      <BlockHeader
        pageName='Конструктор поке'
      >
        <section className={style.constructor_page_wrapper}>
          <h2>
            <span className={style.blue_header}>Соберите&nbsp;ваш</span>
            {/*<span className={style.yellow_header}> идеальный&nbsp;поке за&nbsp;6&nbsp;шагов</span>*/}
            <span className={style.yellow_header}> идеальный&nbsp;поке<span className={style.mobile_gap}>&nbsp;</span><span className={style.mobile_gap_on}> </span>за&nbsp;6&nbsp;шагов</span>
            {/*<ImageWrapper*/}
            {/*  className={style.arrow}*/}
            {/*  name='desktop_constructor_arrow.png'*/}
            {/*  alt='sdf'*/}
            {/*  width={1155}*/}
            {/*  height={75.5}*/}
            {/*/>*/}
            <div className={style.arrow_wrapper}>
              <div className={style.arrow} />
            </div>
          </h2>
          <div className={style.constructor_inner}>
            <ConstructorCard>
              <CheckboxListWrapper
                {...ingredients.basis}
                isCircleCheckbox
                checkboxState={baseProduct}
                changeChecked={changeIsBaseProductChecked}
                changeType={changeBaseProductType}
              />
            </ConstructorCard>
            <ConstructorCard>
              <CheckboxListWrapper
                {...ingredients.protein}
                isCircleCheckbox
                checkboxState={protein}
                changeChecked={changeProteinChecked}
                changeType={changeProteinType}
              />
            </ConstructorCard>
            <ConstructorCard className={style.withoutMargin}>
              <CheckboxListWrapper
                {...ingredients.fillers}
                hasHorizontalLine
                hasFilters
                checkboxState={fillersType}
                changeChecked={changeIsFillerChecked}
                changeType={changeFillers}
                changeFiltersType={changeFillersType}
                howMuchIsLeft={fillers?.type?.length}
                fillersType={fillersType}
              />
            </ConstructorCard>
            <ConstructorCard>
              <CheckboxListWrapper
                {...ingredients.topping}
                checkboxState={topping}
                changeChecked={changeToppingChecked}
                changeType={changeToppingType}
                howMuchIsLeft={topping?.type?.length}
                fillersType={fillersType}
              />
            </ConstructorCard>
            <ConstructorCard>
              <CheckboxListWrapper
                {...ingredients.sauce}
                isCircleCheckbox
                checkboxState={sauce}
                changeChecked={changeSauceChecked}
                changeType={changeSauceType}
              />
            </ConstructorCard>
            <ConstructorCard>
              <CheckboxListWrapper
                {...ingredients.crunch}
                isCircleCheckbox
                changeChecked={changeCrunchChecked}
                changeType={changeCrunchType}
                checkboxState={crunch}
              />
            </ConstructorCard>
            <ConstructorCard>
              <CheckboxListWrapper
                selectListArray={ingredients}
                isSelectList
                {...ingredients.additionally}
                changeChecked={changeCrunchChecked}
                changeType={changeCrunchType}
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
