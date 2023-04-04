import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useAppDispatch } from "app/store";
import {Pagination, ThemeProvider} from "@mui/material";
import { nanoid } from "nanoid";

import { Footer } from "widgets/Footer";
import { Recovery } from "widgets/Recovery";
import { Header, } from "widgets/Header";
import { OrderHistoryCard } from "widgets/OrderHistoryCard";

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

import { IPersonalAreaPagesLinks } from "entities/user/model/types/types";
import {
  changePersonalAreaLinkIsCurrent,
  openModalUserEnterSelector,
  setUserAccountStateSelector,
  AddDeliveryAddress,
  fetchOrders,
  sortUserOrders,
} from "entities/user";

import { IPaymentStatus, orderStatuses } from "../../../../widgets/OrderHistoryCard/model/types/types";
import {
  paymentStatus,
  theme,
} from 'pages/myOrders';

import style from "./MyOrders.module.scss";

export const MyOrders: FC = () => {
  const dispatch = useAppDispatch();
  const registration = useSelector(getRegistrationSelector);
  const userEnter = useSelector(openModalUserEnterSelector);
  const confirmation = useSelector(openConfirmationSelector);
  const userAccount = useSelector(setUserAccountStateSelector);

  const handleLinkClick = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(changePersonalAreaLinkIsCurrent(event.currentTarget.id));
  };

  const handlePaginationClick = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(sortUserOrders(value));
  };

  const pagesCount = Math.ceil(userAccount.userData.orders.length / 12);

  useEffect(() => {
    dispatch(fetchRestaurantProductions());
    dispatch(fetchPagesInfo());
    dispatch(fetchOrders(userAccount.userAccount.email ?? ''));
    dispatch(sortUserOrders(1));
  }, []);

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
                 onClick={handleLinkClick}
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
             userAccount.userData.currentOrders && userAccount.userData.currentOrders.map((order: any) => {
               const id = nanoid();
               const orderStatus: IPaymentStatus = {
                 text: 'Доставлен',
                 color: 'blue',
               };

               return (
                 <OrderHistoryCard
                   key={id}
                   numberOfOrder={123}
                   orderData={order.orderDay}
                   deliveryTime='19:00-19:30'
                   deliveryAddress={order.recipientAddress}
                   cost={String(order.totalCost)}
                   paymentStatus={paymentStatus.PENDING}
                   orderStatus={orderStatuses}
                   commentToOrder={order.comment}
                 />
               )
             })
           }
         </div>
         <div className={style.paginationWrapper}>
           <div className={style.container}>
             <ThemeProvider theme={theme}>
               <Pagination
                 count={pagesCount}
                 defaultPage={1}
                 siblingCount={0}
                 onChange={handlePaginationClick}
               />
             </ThemeProvider>
           </div>
         </div>
       </div>
      </section>
      <Footer />
    </>
  );
};
