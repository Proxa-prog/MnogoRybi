import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useAppDispatch } from 'app/store';

import PopupIcon from '/public/images/location_marker.png'

import { changeMapCenter } from 'app/store/reducers/map';

import {
  IContactsCard,
  IPopupCoordinates,
} from 'entities/constants/constants';
import { setMap } from 'entities/map/model/map';
import { getRegistration } from 'entities/registration/model';
import { openModalUserEnter } from 'entities/userEnter/model';
import { openConfirmation } from 'entities/confirmation/model';
import { setUserAccountState } from 'entities/userAccount/model/userAccount';
import { getSiteDataSelector } from 'entities/siteData/model';
import { fetchSiteData } from 'entities/productions/model/services/fetchSiteData';
import { fetchMapCenter } from 'entities/productions/model/services/fetchMapCenter';

import Footer from 'widgets/ui/Footer/Footer';
import ContactsCard from 'widgets/ui/ContactsCard/ContactsCard';
import BlockHeader from 'widgets/ui/BlockHeader/BlockHeader';
import Header from 'widgets/ui/Header/Header';
import RecenterAutomatically from 'widgets/ui/RecenterAutomatically/RecenterAutomatically';
import ModalRegistration from 'widgets/ui/ModalRegistration/ModalRegistration';
import UserEnter from 'widgets/ui/UserEnter/UserEnter';
import Confirmation from 'widgets/ui/Confirmation/Confirmation';
import Recovery from 'widgets/ui/Recovery/Recovery';

import style from './Contacts.module.scss';

export interface ContactsProps {

}

const Contacts: FC<ContactsProps> = (props) => {
  const dispatch = useAppDispatch();
  const map = useSelector(setMap);
  const registration = useSelector(getRegistration);
  const userEnter = useSelector(openModalUserEnter);
  const confirmation = useSelector(openConfirmation);
  const userAccount = useSelector(setUserAccountState);
  const siteData = useSelector(getSiteDataSelector);

  const createPopup = (PopupCoordinates: IPopupCoordinates) => {
    const id = nanoid();

    let Icon = L.icon({
      iconUrl: PopupIcon,
      iconRetinaUrl: PopupIcon,
      iconAnchor: [PopupCoordinates.lat, PopupCoordinates.lng],
      iconSize: [60, 60],
    });

    return (
      <Marker
        key={id}
        position={[PopupCoordinates.lat, PopupCoordinates.lng]}
        icon={Icon}
      >
        <Popup>
          Наш магазин.
        </Popup>
      </Marker>
    )
  };

  const setMapAddress = (card: IContactsCard) => {

    return () => {
      dispatch(changeMapCenter(card));
    }
  };

  useEffect(() => {
    dispatch(fetchSiteData(dispatch));
    dispatch(fetchMapCenter(dispatch));
  }, []);

  return (
    <>
      {registration.isOpen && <ModalRegistration />}
      {userEnter.isOpen && <UserEnter />}
      {confirmation.isOpen && <Confirmation />}
      {userAccount.recoveryIsOpen && <Recovery />}
      <Header isAuth={userAccount.isLogin} />
      <BlockHeader
        pageName='Контакты'
      >
        <div className={style.our_contacts}>
          {
            siteData.address.map((card: IContactsCard) => {
              const id = nanoid();

              return (
                <ContactsCard
                  key={id}
                  card={card}
                  onClick={setMapAddress(card)}
                />
              )
            })
          }
        </div>
      </BlockHeader>
      <div className={style.map}>
        <MapContainer
          center={[map.lat, map.lng]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            noWrap={true}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <>
            {
              siteData && siteData.popupCoordinates.map((coordinates) => {

                return createPopup(coordinates);
              })
            }
          </>
          <RecenterAutomatically
            lat={map.lat}
            lng={map.lng}
          />
        </MapContainer>
      </div>
      <Footer />
    </>
  )
}

export default Contacts;
