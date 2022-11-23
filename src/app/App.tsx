import * as React from 'react';

import { Provider } from 'react-redux';

import Header from 'widgets/ui/Header/Header';
import Description from 'widgets/ui/Description/Description';
import Footer from 'widgets/ui/Footer/Footer';

import { store } from './store';

import styles from './App.module.scss';
import 'fonts/style.css';
import './styles/index.scss';

const App: React.FC = () => (
  <Provider store={store}>
    <div className={styles.App}>
      <Header isAuth />
      <Description />
      <Footer />
    </div>
  </Provider>
);

export default App;
