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

import { changeMapCenter } from 'features/map/model/slice/mapReducer';
import { fetchMapCenter } from 'features/map/model/services/fetchMapCenter';
import { setMapSelector } from 'features/map/model/slice/setMapSelector';
import { openConfirmationSelector } from 'features/Confirmation/model/selectors/openConfirmationSelector';

import { IContactsCard, IPopupCoordinates } from 'entities/ContactsCard/model/types/ContactsCardTypes';
import { getRegistration } from 'entities/registration/model';
import { openModalUserEnter } from 'entities/userEnter/model';
import { setUserAccountState } from 'entities/userAccount/model/userAccount';
import { getSiteDataSelector } from 'features/siteData/model/selectors/siteDataSelector';
import { fetchSiteData } from 'features/siteData/model/services/fetchSiteData';
import ContactsCard from 'entities/ContactsCard/ContactsCard';

import Footer from 'widgets/ui/Footer/Footer';
import BlockHeader from 'widgets/ui/Header/ui/BlockHeader/BlockHeader';
import Header from 'widgets/ui/Header/Header';
import RecenterAutomatically from 'widgets/ui/RecenterAutomatically/RecenterAutomatically';
import ModalRegistration from 'widgets/ui/ModalRegistration/ModalRegistration';
import UserEnter from 'widgets/ui/UserEnter/UserEnter';
import Confirmation from 'features/Confirmation/Confirmation';
import Recovery from 'widgets/ui/Recovery/Recovery';

import style from './Contacts.module.scss';

export interface ContactsProps {

}

const Contacts: FC<ContactsProps> = (props) => {
  const dispatch = useAppDispatch();
  const map = useSelector(setMapSelector);
  const registration = useSelector(getRegistration);
  const userEnter = useSelector(openModalUserEnter);
  const confirmation = useSelector(openConfirmationSelector);
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
