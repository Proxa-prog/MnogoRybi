import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import PopupIcon from '/public/images/location_marker.png'

import { changeMapCenter } from 'app/store/reducers/map';

import {
  ADDRESS,
  IContactsCard,
  IPopupCoordinates,
  POPUP_COORDINATES
} from 'entities/constants/constants';
import { setMap } from 'entities/map/model/map';

import Footer from 'widgets/ui/Footer/Footer';
import ContactsCard from 'widgets/ui/ContactsCard/ContactsCard';
import Header from 'widgets/ui/Header/Header';
import RecenterAutomatically from 'widgets/ui/RecenterAutomatically/RecenterAutomatically';

import style from './Contacts.module.scss';

export interface ContactsProps {

}

const Contacts: FC<ContactsProps> = (props) => {
  const dispatch = useDispatch();
  const map = useSelector(setMap);
  const createPopup = (PopupCoordinates: IPopupCoordinates) => {
    let Icon = L.icon({
      iconUrl: PopupIcon,
      iconRetinaUrl: PopupIcon,
      iconAnchor: [PopupCoordinates.lat, PopupCoordinates.lng],
      iconSize: [60, 60],
    });

    return (
      <Marker position={[PopupCoordinates.lat, PopupCoordinates.lng]} icon={Icon}>
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

  return (
    <>
      <Header isAuth />
      <div className={style.contacts}>
        <p className={style.nav}>
          <Link to='/'>
            <span>Главная</span>
          </Link>
          &nbsp; &mdash; &nbsp;
          Контакты
        </p>
        <h1>Контакты</h1>
        <div className={style.our_contacts}>
          {
            ADDRESS.map((card: IContactsCard) => {
              return (
                <ContactsCard
                  card={card}
                  onClick={setMapAddress(card)}
                />
              )
            })
          }
        </div>
      </div>
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
              POPUP_COORDINATES.map((item) => {
                return createPopup(item);
              })
            }
          </>
          <RecenterAutomatically lat={map.lat} lng={map.lng} />
        </MapContainer>
      </div>
      <Footer />
    </>
  )
}

export default Contacts;
