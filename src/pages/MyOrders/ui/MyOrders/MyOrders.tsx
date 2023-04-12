import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Pagination, ThemeProvider } from '@mui/material';
import { nanoid } from 'nanoid';

import { useAppDispatch } from 'app/store';

import { paymentStatus, theme } from "pages/MyOrders";

import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { Recovery } from "widgets/Recovery";
import { BasketWrapper } from "widgets/Basket";
import {
  orderStatuses,
  OrderHistoryCard,
} from 'widgets/OrderHistoryCard';

import { UserEnter } from "features/user";
import {
  getRegistrationSelector,
  openConfirmationSelector,
  ModalRegistration,
  Confirmation
} from 'features/registration';

import { fetchPagesInfo, fetchRestaurantProductions } from 'features/restaurant';

import {
  userAccountActions,
  userAccountSelector,
  AddDeliveryAddress,
  IPersonalAreaPagesLinks,
  userEnterSelector,
} from 'entities/user';
import { IAddedOrder } from "entities/basket";

import { MOK_DELIVERY_TIME, NUMBER_OF_CARDS_PER_PAGE } from "shared";

import style from './MyOrders.module.scss';

export const MyOrders: FC = () => {
  const dispatch = useAppDispatch();
  const registration = useSelector(getRegistrationSelector);
  const userEnter = useSelector(userEnterSelector);
  const confirmation = useSelector(openConfirmationSelector);
  const userAccount = useSelector(userAccountSelector);

  const handleLinkClick = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(userAccountActions.changePersonalAreaLinkIsCurrent(event.currentTarget.id));
  };

  const handlePaginationClick = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(userAccountActions.sortUserOrders(value));
  };

  const pagesCount = Math.ceil(userAccount.userData.orders.length / NUMBER_OF_CARDS_PER_PAGE);

  useEffect(() => {
    dispatch(fetchRestaurantProductions());
    dispatch(fetchPagesInfo());
    dispatch(userAccountActions.sortUserOrders(1));
  }, []);

  return (
    <>
      <Header isAuth={userAccount.userAccount.isLogin} />
      {registration.isOpen && <ModalRegistration />}
      {userEnter.isOpen && <UserEnter />}
      {confirmation.isOpen && <Confirmation />}
      {userAccount.userAccount.isModalRecoveryOpen && <Recovery />}
      {userAccount.userAccount.isLogin && userAccount.userAccount.isModalAddNewAddressOpen && (
        <AddDeliveryAddress />
      )}
      <section className={style.wrapper}>
        <div className={style.inner}>
          <div className={style.linksWrapper}>
            {userAccount.personalAreaLinks &&
              userAccount.personalAreaLinks.map((item: IPersonalAreaPagesLinks) => (
                <Link
                  className={classNames(style.pageLink, {
                    [style.pageLinkCurrent]: item.isCurrent,
                  })}
                  onClick={handleLinkClick}
                  to={`/${item.id}`}
                  id={item.id}
                  key={item.id}
                >
                  {item.name}
                </Link>
              ))}
          </div>
          <div className={style.historyOrderWrapper}>
            {
              userAccount.userData.currentOrders &&
                userAccount.userData.currentOrders.map((order: IAddedOrder) => {
                  const id = nanoid();

                  return (
                    <OrderHistoryCard
                      key={id}
                      numberOfOrder={order.orderId}
                      orderData={order.orderDay}
                      deliveryTime={MOK_DELIVERY_TIME}
                      deliveryAddress={order.recipientAddress}
                      cost={String(order.totalCost)}
                      paymentStatus={paymentStatus.PENDING}
                      orderStatus={orderStatuses}
                      commentToOrder={order.comment}
                    />
                  );
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
      <BasketWrapper />
      <Footer />
    </>
  );
};
