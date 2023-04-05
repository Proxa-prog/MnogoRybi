import { FC, useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { RecenterAutomaticallyProps } from 'features/map';

export const RecenterAutomatically: FC<RecenterAutomaticallyProps> = ({ lat, lng }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng]);

  return null;
};
