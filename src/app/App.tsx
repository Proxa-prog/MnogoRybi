import * as React from 'react';

import Header from 'widgets/ui/Header/Header';
import Description from 'widgets/ui/Description/Description';
import Footer from 'widgets/ui/Footer/Footer';

import styles from './App.module.scss';
import 'fonts/style.css';
import './styles/index.scss';

const App: React.FC = () => (
  <div className={styles.App}>
    <Header isAuth />
    <Description />
    <Footer />
  </div>
);

export default App;
