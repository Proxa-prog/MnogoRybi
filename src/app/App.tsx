import * as React from 'react';

import Header from 'widgets/ui/Header/Header';
import Footer from 'widgets/ui/Footer/Footer';
import Card from 'widgets/ui/Card/Card';

import Input from 'shared/ui/Input/Input';
import Checkbox from 'shared/ui/Checkbox/Checkbox';
import Svg from 'shared/ui/Svg/Svg';
import Typography from 'shared/ui/Typography/Typography';
import Button from 'shared/ui/Button/Button';
import StatusMarker from 'shared/ui/StatusMarker/StatusMarker';
import Counter from 'shared/ui/Counter/Counter';

import styles from './App.module.scss';
import 'fonts/style.css';
import './styles/index.scss';

const App: React.FC = () => (
  <div className={styles.App}>
    <Header isAuth />
    <h1>React is working!!!!!!s!!!!</h1>
    <Footer />
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
      onClick={() => {
        console.log('Button onClick');
      }}
    >
      Войти
    </Button>
    <StatusMarker
      color="yellow"
    >
      Label
    </StatusMarker>
    <Counter count={1} />
    <Button
      isTurn="default"
      type="button"
      onClick={() => {
        console.log('Button Turn onClick');
      }}
      isGrayTheme
    />
    <Card
      id="Поке"
      imageUrl="poke_with_turkey.jpg"
      header="Фирменный поке с индейкой"
      description="Состав на усмотрение шеповара"
      cost={360}
      previousCost={360}
      statuses={[
        {
          children: 'Новинка',
          color: 'blue',
        },
        {
          children: '234',
          color: 'purple',
        },
        {
          children: 'Хит Сезона!',
          color: 'gray',
        },
        {
          children: 'Блюдо дня',
          color: 'yellow',
        },
        {
          children: 'Старинка',
          color: 'green',
        },
      ]}
    />
    <Card
      imageUrl="./cheesecake.jpg"
      isInfo
      header="Утро начинается с кофе"
      description="Мы варим для вас кофе на итальянских зёрнах, заряженный на продуктивную рабочую неделю."
      buttonText="Подробнее"
      isGrayTheme
      statuses={[
        {
          children: 'Блюдо дня',
          color: 'yellow',
        },
      ]}
    />
  </div>
);

export default App;
