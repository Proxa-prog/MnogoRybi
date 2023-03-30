import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useAppDispatch } from "app/store";

import { Footer } from "widgets/Footer";
import { Recovery } from "widgets/Recovery";
import { Header, } from "widgets/Header";
import { IPersonalAreaPagesLinks } from "entities/user/model/types/types";
import { OrderHistoryCard } from "widgets/OrderHistoryCard";
import { IPaymentStatus } from "widgets/OrderHistoryCard/ui/OrderHistoryCard";

import {
  getRegistrationSelector,
  openConfirmationSelector,
  ModalRegistration,
  Confirmation,
} from "features/registration";
import { UserEnter } from "features/user";
import {
  fetchPagesInfo,
  fetchRestaurantProductions,
} from "features/restaurant";

import {
  changePersonalAreaLinkIsCurrent,
  openModalUserEnterSelector,
  setUserAccountStateSelector,
} from "entities/user";
import AddDeliveryAddress from "entities/user/ui/AddDeliveryAddress/AddDeliveryAddress";

import style from "./MyOrders.module.scss";

interface IUserOrder {

}

export const enum paymentStatus {
  PENDING = 'Оплата при получении',
  FULLFILED = 'Оплачен онлайн',
  REJECTED = 'Не оплачен',
}

export const MyOrders: FC = () => {
  const dispatch = useAppDispatch();
  const registration = useSelector(getRegistrationSelector);
  const userEnter = useSelector(openModalUserEnterSelector);
  const confirmation = useSelector(openConfirmationSelector);
  const userAccount = useSelector(setUserAccountStateSelector);

  const handleLickClick = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(changePersonalAreaLinkIsCurrent(event.currentTarget.id));
  };

  useEffect(() => {
    dispatch(fetchRestaurantProductions());
    dispatch(fetchPagesInfo());
  }, []);
  console.log(userAccount.userData.orders)
  return (
    <>
      <Header isAuth={userAccount.userAccount.isLogin} />
      {registration.isOpen && <ModalRegistration />}
      {userEnter.isOpen && <UserEnter />}
      {confirmation.isOpen && <Confirmation />}
      {userAccount.userAccount.recoveryIsOpen && <Recovery />}
      {
        userAccount.userAccount.isLogin
        && userAccount.userAccount.isAddNewAddressOpen
        && <AddDeliveryAddress />
      }
      <section className={style.wrapper}>
       <div className={style.inner}>
         <div className={style.links_wrapper}>
           {
             userAccount.personalAreaLinks && userAccount.personalAreaLinks.map((item: IPersonalAreaPagesLinks) => (
               <Link
                 className={classNames(
                   style.page_link,
                   { [style.page_link_current]: item.isCurrent })}
                 onClick={handleLickClick}
                 to={`/${item.id}`}
                 id={item.id}
                 key={item.id}
               >
                 {item.name}
               </Link>
             ))
           }
         </div>
         <div className={style.history_order_wrapper}>
           {
             // Должен принимать тип IAddedOrder, выдаёт ошибку.
             userAccount.userData.orders && userAccount.userData.orders.map((order: any) => {
               const orderStatus: IPaymentStatus = {
                 text: 'Доставлен',
                 color: 'blue',
               };

               return (
                 <OrderHistoryCard
                   key={order.orderId}
                   numberOfOrder={123}
                   orderData={order.orderDay}
                   deliveryTime='19:00-19:30'
                   deliveryAddress={order.recipientAddress}
                   cost={String(order.totalCost)}
                   paymentStatus={paymentStatus.PENDING}
                   orderStatus={orderStatus}
                   commentToOrder={order.comment}
                 />
               )
             })
           }
         </div>
       </div>
      </section>
      <Footer />
    </>
  );
};
