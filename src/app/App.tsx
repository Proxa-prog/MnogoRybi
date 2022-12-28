import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { store } from './store';

import MainPage from 'widgets/ui/MainPage/MainPage';
import News from 'widgets/ui/News/News';
import Contacts from 'widgets/ui/Contacts/Contacts';
import NewsPage from 'widgets/ui/NewsPage/NewsPage';

import 'fonts/style.css';
import './styles/index.scss';
import style from './App.module.scss';

const App: React.FC = () => {

  return (
    <div className={style.App}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/news' element={<News />} />
            <Route path='/:newsId' element={<NewsPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
};

export default App;
