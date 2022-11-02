import * as React from 'react';
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
  </div>
);

export default App;
