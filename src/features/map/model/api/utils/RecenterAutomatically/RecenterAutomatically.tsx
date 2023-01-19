import { FC, useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { RecenterAutomaticallyProps } from 'features/map';

const RecenterAutomatically: FC<RecenterAutomaticallyProps> = ({ lat, lng }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng]);

  return null;
}

export default RecenterAutomatically;
