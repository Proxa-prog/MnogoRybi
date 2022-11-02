import * as React from 'react';
import Svg from '../shared/ui/Svg/Svg';
import Checkbox from '../shared/ui/Checkbox/Checkbox';

import Input from '../shared/ui/Input/Input';
import styles from './App.module.scss';
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
  </div>
);

export default App;
