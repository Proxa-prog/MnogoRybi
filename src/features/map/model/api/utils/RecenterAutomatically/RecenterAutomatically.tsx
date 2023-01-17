import { FC, useEffect } from 'react';
import { useMap } from 'react-leaflet';

export interface RecenterAutomaticallyProps {
  lat: number;
  lng: number;
}

const RecenterAutomatically: FC<RecenterAutomaticallyProps> = ({ lat, lng }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng]);

  return null;
}

export default RecenterAutomatically;
