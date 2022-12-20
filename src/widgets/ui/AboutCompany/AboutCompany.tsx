import React, { FC } from 'react';

import logo from '/public/images/more_fish_white_logo.svg';

import Advanced from 'widgets/ui/Advanced/Advanced';

import style from './AboutCompany.module.scss';

export interface AboutCompanyProps {

}

const AboutCompany: FC<AboutCompanyProps> = (props) => {

    return (
        <section className={style.about_company}>
            <div
                className={style.images_wrapper}
            ></div>
            <Advanced
                name='fish'
                width='50'
                height='50'
                text={`Свежие \n ингридиенты`}
            />
            <Advanced
                name='sashimi'
                width='50'
                height='50'
                text='Собственные рецепты'
            />
            <Advanced
                name='poke_bowl'
                width='50'
                height='50'
                text='Конструктор поке'
            />
            <div className={style.description}>
                <h3>О компании</h3>
                <p>
                    Здоровый и вкусный завтрак, быстрый обед или ужин со свежими и экзотическими ароматами. В "Много Рыбы" у нас есть все! Ознакомьтесь с нашим меню, разработанным искусными шеф-поварами с использованием настоящих сезонных ингредиентов, и полюбите вкуснейший Poke Bowl. Либо выберите одно из наших фирменных блюд, либо создайте свой идеальный Poke!
                </p>
                <div
                    className={style.logo_wrapper}
                />
            </div>
        </section>
    )
}

export default AboutCompany;
