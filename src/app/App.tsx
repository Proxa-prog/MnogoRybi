import * as React from 'react';
import Svg from '../shared/ui/Svg/Svg';
import Checkbox from '../shared/ui/Checkbox/Checkbox';

import Input from '../shared/ui/Input/Input';
import styles from './App.module.scss';
import Typography from '../shared/ui/Typography/Typography';
import Button from '../shared/ui/Button/Button';
import StatusMarker from '../shared/ui/StatusMarker/StatusMarker';

import '../fonts/style.css';
import './styles/index.scss';

const App: React.FC = () => (
  <div className={styles.App}>
    <h1>React is working!!!!!!s!!!!</h1>
    <Input
      name="adf"
      label="asdf"
      media="desktop"
      error="sdef"
      required
    />
    <Checkbox
      label="asdf"
      checked
      onChange={() => {
        console.log('Checkbox onChange.');
      }}
    // isCircle
    />
    <Svg
      name="ok_gray"
      className="qwerty"
      width="50"
      height="50"
    />
    <Typography type="H1">Некоторый текст</Typography>
    <Button
      type="button"
    >
      Войти
    </Button>
    <StatusMarker
      color="yellow"
    >
      Label
    </StatusMarker>
  </div>
);

export default App;
