import React, { FC } from "react";

import { Advanced } from "shared";

import style from "./AboutCompany.module.scss";

export const AboutCompany: FC = () => {
  return (
    <section className={style.aboutCompany}>
      <div className={style.imagesWrapper}></div>
      <Advanced
        name="fish"
        width="50"
        height="50"
        text={`Свежие \n ингридиенты`}
      />
      <Advanced
        name="sashimi"
        width="50"
        height="50"
        text="Собственные рецепты"
      />
      <Advanced
        name="poke_bowl"
        width="50"
        height="50"
        text="Конструктор поке"
      />
      <div className={style.description}>
        <h3>О компании</h3>
        <p>
          Здоровый и вкусный завтрак, быстрый обед или ужин со свежими и
          экзотическими ароматами. В "Много Рыбы" у нас есть все! Ознакомьтесь с
          нашим меню, разработанным искусными шеф-поварами с использованием
          настоящих сезонных ингредиентов, и полюбите вкуснейший Poke Bowl. Либо
          выберите одно из наших фирменных блюд, либо создайте свой идеальный
          Poke!
        </p>
        <div className={style.logoWrapper} />
      </div>
    </section>
  );
};
