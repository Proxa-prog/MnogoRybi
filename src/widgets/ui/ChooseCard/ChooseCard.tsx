import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import { openProductsCard } from 'entities/openProductsCard/model/selectors';

import Select from 'shared/ui/Select/Select';
import LabelText from 'shared/ui/LabelText/LabelText';
import Button from 'shared/ui/Button/Button';

import Image from '/public/images/plus.svg';

import style from './ChooseCard.module.scss';

export interface ChooseCardProps {
}

const ChooseCard: FC<ChooseCardProps> = (props) => {
    // const {
    //     imageUrl,
    // } = props;
    const productsCard = useSelector(openProductsCard);
    const [amountProduct, setAmountProduct] = useState(1);

    return (
        <div className={style.choose_card}>
            <div
                className={style.image}
                style={{
                    backgroundImage: `url(images/${productsCard.imageUrl})`,
                }}
            ></div>
            <div className={style.info_wrapper}>
                <div className={style.info}>
                    <h3>{productsCard.header}</h3>

                    <div className={style.calories}>
                        <span>1 шт. / 320 гр.</span>
                        <span>280 ккал / 1172 кДж</span>
                    </div>

                    <div className={style.compaund}>
                        <h4>Состав</h4>
                        <span>{productsCard.description}</span>
                    </div>

                    <div className={style.ingredients}>
                        <LabelText
                            children="Выберите основу"
                            className={style.ingredients_label}
                        />
                        <Select
                            options={[]}
                            className={style.ingredients_select}
                            style={{ backgroundImage: `url(images/plus.svg)` }}
                        />

                        <LabelText
                            children="Выберите соус"
                            className={style.ingredients_label}
                        />
                        <Select
                            options={[]}
                            className={style.ingredients_select}
                            style={{ backgroundImage: `url(images/plus.svg)` }}
                        />
                    </div>
                </div>
                <div className={style.amount_wrapper}>
                    <div className={style.how_much_wrapper}>
                        <Button
                            className={style.button_amount}
                            type='button'
                            isGrayTheme
                            imageLeft='minus.svg'
                            imageWidth={24}
                            imageHeight={24}
                        />
                        <span className={style.amount}>{amountProduct}</span>
                        <Button
                            className={style.button_amount}
                            type='button'
                            isGrayTheme
                            imageLeft='plus.svg'
                            imageWidth={24}
                            imageHeight={24}
                        />
                    </div>
                    <Button
                        className={style.button_basket}
                        type='button'
                        color='yellow'
                        children={`В корзину за ${productsCard.cost} ₽`}
                    />
                </div>
            </div>
        </div>
    )
}

export default ChooseCard;
