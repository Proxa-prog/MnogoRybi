import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'app/store';

import Delivery from 'features/Delivery/Delivery';
import Payment from 'features/Payment/Payment';
import Recipient from 'features/Recipient/Recipient';
import ShowOrder from 'features/ShowOrder/ShowOrder';
import BasketSumm from 'features/BasketSumm/BasketSumm';

import { openBasket } from 'entities/basket/model/slice/openBasket';
import { setTotalCost } from 'entities/setTotalCost';
import { COST_OF_DELIVERY } from 'entities/constants/constants';
import { addOrderToUser } from 'entities/productions/model/services/addOrderToUser';
import { setUserAccountState } from 'entities/userAccount/model/userAccount';

import Button from 'shared/ui/Button/Button';

import style from './Basket.module.scss';

export interface BasketProps {
}

const Basket: FC<BasketProps> = (props) => {
  const dispatch = useAppDispatch();
  const basket = useSelector(openBasket);
  const totalCost = setTotalCost(basket.basket);
  const userAccount = useSelector(setUserAccountState);

  console.log(basket)
  console.log('userAccount', userAccount)

  const handleSubmit = (event: any) => {
    event.preventDefault();

    dispatch(addOrderToUser({
      userEmail: userAccount.email,
      basket: basket,
    }))
  };

  return (
    <form
      className={style.basket_wrapper}
      onSubmit={handleSubmit}
    >
      <div className={style.basket_info}>
        <ShowOrder />
        <Recipient />
        <Delivery />
        <Payment />
      </div>
      <BasketSumm
        basket={basket.basket}
        totalCost={totalCost}
        costOfDelivery={COST_OF_DELIVERY}
      />
      <div className={style.button_to_order_wrapper}>
        <Button
          className={style.button_to_order}
          type='submit'
          color='yellow'
          children={
            totalCost === 0
              ? `Заказать на ${totalCost} ₽`
              : `Заказать на ${totalCost + COST_OF_DELIVERY} ₽`
          }
          onClick={(event) => { }}
        />
      </div>
    </form>
  )
}

export default Basket;
