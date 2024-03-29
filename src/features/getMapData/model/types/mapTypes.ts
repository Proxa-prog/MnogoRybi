export interface IMap {
  lat: number;
  lng: number;
}

export interface IMapAction {
  payload: IMap;
}

export interface RecenterAutomaticallyProps {
  lat: number;
  lng: number;
}
