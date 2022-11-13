import * as React from 'react';

import Header from '/src/widgets/ui/Header/Header';
import Input from '/src/shared/ui/Input/Input';
import Checkbox from '/src/shared/ui/Checkbox/Checkbox';
import Svg from '/src/shared/ui/Svg/Svg';
import Typography from '/src/shared/ui/Typography/Typography';
import Button from '/src/shared/ui/Button/Button';
import StatusMarker from '/src/shared/ui/StatusMarker/StatusMarker';
import Counter from '/src/shared/ui/Counter/Counter';
import Card from '/src/widgets/ui/Card/Card';

import styles from './App.module.scss';
import '/src/fonts/style.css';
import './styles/index.scss';


const App: React.FC = () => (
  <div className={styles.App}>
    <Header isAuth />
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
