import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'app/store';

import { BlockHeader, Header } from 'widgets/Header';
import {
  ConstructorCard,
  AddCreatedPoke,
  CheckboxListWrapper
} from 'widgets/ConstructorCard';
import { Footer } from 'widgets/Footer';

import {
  fetchProductions,
  getIngredientsSelector,
  fetchIngredients,
} from 'features/productions';
import { fetchPagesInfo, fetchRestaurantProductions } from 'features/restaurant';

import {userAccountSelector, userEnterSelector} from 'entities/user';
import {
  baseProductSelector,
  constructorActions,
  crunchSelector,
  fillersSelector,
  fillersTypeSelector,
  proteinSelector,
  sauceSelector,
  toppingSelector,
  fetchFilters,
} from 'entities/constructor';

import { ImageWrapper } from 'shared';

import style from './Constructor.module.scss';
import {
  Confirmation,
  getRegistrationSelector,
  ModalRegistration, openConfirmationSelector
} from "../../../../features/registration";
import {UserEnter} from "../../../../features/user";
import {Recovery} from "../../../../widgets/Recovery";

export const Constructor = () => {
  const dispatch = useAppDispatch();
  const registration = useSelector(getRegistrationSelector);
  const userEnter = useSelector(userEnterSelector);
  const confirmation = useSelector(openConfirmationSelector);
  const userAccount = useSelector(userAccountSelector);
  const ingredients = useSelector(getIngredientsSelector);
  const fillersType = useSelector(fillersTypeSelector);
  const fillers = useSelector(fillersSelector);
  const baseProduct = useSelector(baseProductSelector);
  const sauce = useSelector(sauceSelector);
  const protein = useSelector(proteinSelector);
  const topping = useSelector(toppingSelector);
  const crunch = useSelector(crunchSelector);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const getWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', getWindowWidth);

    return () => {
      window.removeEventListener('resize', getWindowWidth);
    };
  }, []);

  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(fetchProductions());
    dispatch(fetchRestaurantProductions());
    dispatch(fetchPagesInfo());
    dispatch(fetchFilters());
  }, []);

  return (
    <div>
      {registration.isOpen && <ModalRegistration />}
      {userEnter.isOpen && <UserEnter />}
      {confirmation.isOpen && <Confirmation />}
      {userAccount.userAccount.isModalRecoveryOpen && <Recovery />}
      <Header isAuth={userAccount.userAccount.isLogin} />
      <BlockHeader pageName='Конструктор поке'>
        <section className={style.wrapper}>
          <h2>
            <span className={style.blueTextHeader}>Соберите&nbsp;ваш</span>
            <span className={style.yellowTextHeader}>
              {' '}
              идеальный&nbsp;поке
              <span className={style.mobileGap}>&nbsp;</span>
              <span className={style.mobileGapOn}> </span>за&nbsp;6&nbsp;шагов
            </span>
            {(windowWidth > 1200 && (
              <ImageWrapper
                className={style.arrow}
                name='desktop_constructor_arrow.png'
                alt='Стрелка указатель'
              />
            )) ||
              (windowWidth < 1200 && 767 < windowWidth && (
                <ImageWrapper
                  className={style.arrow}
                  name='tablet_constructor_arrow.png'
                  alt='Стрелка указатель'
                />
              )) ||
              (768 > windowWidth && (
                <ImageWrapper
                  className={style.arrow}
                  name='mobile_constructor_arrow.png'
                  alt='Стрелка указатель'
                />
              ))}
          </h2>
          <div className={style.constructorInner}>
            <ConstructorCard>
              <CheckboxListWrapper
                {...ingredients.basis}
                isCircleCheckbox
                checkboxState={baseProduct}
                changeChecked={constructorActions.changeIsBaseProductChecked}
                changeType={constructorActions.changeBaseProductType}
              />
            </ConstructorCard>
            <ConstructorCard>
              <CheckboxListWrapper
                {...ingredients.protein}
                isCircleCheckbox
                checkboxState={protein}
                changeChecked={constructorActions.changeProteinChecked}
                changeType={constructorActions.changeProteinType}
              />
            </ConstructorCard>
            <ConstructorCard className={style.withoutMargin}>
              <CheckboxListWrapper
                {...ingredients.fillers}
                hasHorizontalLine
                hasFilters
                checkboxState={fillersType}
                changeChecked={constructorActions.changeIsFillerChecked}
                changeType={constructorActions.changeFillers}
                changeFiltersType={constructorActions.changeFillersType}
                howMuchIsLeft={fillers?.type?.length}
                fillersType={fillersType}
              />
            </ConstructorCard>
            <ConstructorCard>
              <CheckboxListWrapper
                {...ingredients.topping}
                checkboxState={topping}
                changeChecked={constructorActions.changeToppingChecked}
                changeType={constructorActions.changeToppingType}
                howMuchIsLeft={topping?.type?.length}
                fillersType={fillersType}
              />
            </ConstructorCard>
            <ConstructorCard>
              <CheckboxListWrapper
                {...ingredients.sauce}
                isCircleCheckbox
                checkboxState={sauce}
                changeChecked={constructorActions.changeSauceChecked}
                changeType={constructorActions.changeSauceType}
              />
            </ConstructorCard>
            <ConstructorCard>
              <CheckboxListWrapper
                {...ingredients.crunch}
                isCircleCheckbox
                changeChecked={constructorActions.changeCrunchChecked}
                changeType={constructorActions.changeCrunchType}
                checkboxState={crunch}
              />
            </ConstructorCard>
            <ConstructorCard>
              <CheckboxListWrapper
                selectListArray={ingredients}
                isSelectList
                {...ingredients.additionally}
                changeChecked={constructorActions.changeCrunchChecked}
                changeType={constructorActions.changeCrunchType}
              />
            </ConstructorCard>
            <AddCreatedPoke />
          </div>
        </section>
      </BlockHeader>
      <Footer />
    </div>
  );
};
