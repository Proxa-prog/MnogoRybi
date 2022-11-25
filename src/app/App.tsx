import * as React from 'react';

import { Provider } from 'react-redux';

import Header from 'widgets/ui/Header/Header';
import Description from 'widgets/ui/Description/Description';
import ComponentWrapper from 'widgets/ui/ProductsWrapper/ComponentWrapper';
import Products from 'widgets/ui/Products/Products';
import Footer from 'widgets/ui/Footer/Footer';

import { cards } from 'entities/constants/constants';

import style from './App.module.scss';
import 'fonts/style.css';
import './styles/index.scss';
import { store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className={style.App}>
        <Header isAuth />
        <Description />
        <ComponentWrapper title='Наша продукция'>
          <Products
            title='Поке'
            productCards={cards}
          />
        </ComponentWrapper>
        <Footer />
      </div>
    </Provider>
  )
};

export default App;
