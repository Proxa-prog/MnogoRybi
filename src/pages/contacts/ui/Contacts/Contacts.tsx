import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useAppDispatch } from "app/store";

import PopupIcon from "/public/images/location_marker.png";

import { Footer } from "widgets/Footer";
import { Header, BlockHeader } from "widgets/Header";
import { Recovery } from "widgets/Recovery";

import { UserEnter } from "features/user";
import {
  fetchMapCenter,
  setMapSelector,
  changeMapCenter,
  RecenterAutomatically,
} from "features/map";
import { fetchProductions } from "features/productions";
import {
  getRegistrationSelector,
  openConfirmationSelector,
  ModalRegistration,
  Confirmation,
} from "features/registration";
import {
  getRestaurantLocationSelector,
  fetchRestaurantLocation,
  fetchPagesInfo,
  fetchRestaurantProductions,
  getRestaurantPagesInfoSelector,
} from "features/restaurant";

import {
  openModalUserEnterSelector,
  setUserAccountStateSelector,
} from "entities/user";
import {
  IContactsCard,
  IPopupCoordinates,
  ContactsCard,
} from "entities/contact";

import { MAP_ICON_SIZE, MAP_ZOOM } from "shared";

import style from "./Contacts.module.scss";

const Contacts: FC = () => {
  const dispatch = useAppDispatch();
  const map = useSelector(setMapSelector);
  const registration = useSelector(getRegistrationSelector);
  const userEnter = useSelector(openModalUserEnterSelector);
  const confirmation = useSelector(openConfirmationSelector);
  const userAccount = useSelector(setUserAccountStateSelector);
  const pagesInfo = useSelector(getRestaurantPagesInfoSelector);
  const restaurantLocation = useSelector(getRestaurantLocationSelector);

  const createPopup = (PopupCoordinates: IPopupCoordinates) => {
    const id = nanoid();

    let Icon = L.icon({
      iconUrl: PopupIcon,
      iconRetinaUrl: PopupIcon,
      iconAnchor: [PopupCoordinates.lat, PopupCoordinates.lng],
      iconSize: [MAP_ICON_SIZE, MAP_ICON_SIZE],
    });

    return (
      <Marker
        key={id}
        position={[PopupCoordinates.lat, PopupCoordinates.lng]}
        icon={Icon}
      >
        <Popup>Наш магазин.</Popup>
      </Marker>
    );
  };

  const setMapAddress = (card: IContactsCard) => {
    return () => {
      dispatch(changeMapCenter(card));
    };
  };

  useEffect(() => {
    dispatch(fetchRestaurantLocation());
    dispatch(fetchMapCenter());
    dispatch(fetchProductions());
    dispatch(fetchRestaurantProductions());
    dispatch(fetchPagesInfo());
  }, []);

  return (
    <>
      {registration.isOpen && <ModalRegistration />}
      {userEnter.isOpen && <UserEnter />}
      {confirmation.isOpen && <Confirmation />}
      {userAccount.userAccount.recoveryIsOpen && <Recovery />}
      <Header isAuth={userAccount.userAccount.isLogin} />
      <BlockHeader pageName="Контакты">
        <div className={style.our_contacts}>
          {pagesInfo.restaurantAddress.map((card: IContactsCard) => {
            const id = nanoid();

            return (
              <ContactsCard
                key={id}
                card={card}
                onClick={setMapAddress(card)}
              />
            );
          })}
        </div>
      </BlockHeader>
      <div className={style.map}>
        <MapContainer
          center={[
            restaurantLocation.restautantMapCenter.lat,
            restaurantLocation.restautantMapCenter.lng,
          ]}
          zoom={MAP_ZOOM}
          scrollWheelZoom={false}
        >
          <TileLayer
            noWrap={true}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <>
            {restaurantLocation &&
              restaurantLocation.restautantPopupCoordinates.map(
                (coordinates) => {
                  return createPopup(coordinates);
                }
              )}
          </>
          <RecenterAutomatically lat={map.lat} lng={map.lng} />
        </MapContainer>
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
