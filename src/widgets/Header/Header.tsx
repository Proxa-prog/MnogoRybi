import React,
{
  FC,
  useEffect,
  useState
} from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { useAppDispatch } from 'app/store';
import { changeIsOpenUserEnter } from 'entities/user/model/slice/userEnterSlice';
import { changeIsOpenRegistration } from 'features/ModalRegistration/model/slice/registrationReducer';

import { openBasketBlock } from 'entities/basket/model/slice/basketReducer';
import { ViewPorts } from 'shared/assets/constants/constants';
import { openBasketSelector } from 'entities/basket/model/selectors/openBasketSelector';
import { openModalUserEnterSelector } from 'entities/user/model/selectors/openModalUserEnterSelector';

import HeaderOrderDataWrapper from 'widgets/Header/ui/HeaderOrderDataWrapper/HeaderOrderDataWrapper';
import HeaderNavWrapper from 'widgets/Header/ui/HeaderNavWrapper/HeaderNavWrapper';

import style from './Header.module.scss';

export interface HeaderProps {
  itemsInTheBasket?: any;
  isAuth?: boolean;
}

const Header: FC<HeaderProps> = (props) => {
  const {
    itemsInTheBasket,
    isAuth = false,
  } = props;

  const dispatch = useAppDispatch();
  const [scrollHeight, setScrollHeight] = useState(0);
  const [isHeaderMenuActive, setIsHeaderMenuActive] = useState(false);
  const [isProductsMenuActive, setIsProductsMenuActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const basket = useSelector(openBasketSelector);
  const userEnter = useSelector(openModalUserEnterSelector);

  const handlerButtonBasketClick = () => {
    dispatch(openBasketBlock(basket.isBasketOpen));
  };

  const handleScroll = () => {
    setScrollHeight(window.scrollY);
  };

  const onProductsMenuClick = () => {
    setIsProductsMenuActive((prevState) => !prevState);
  };

  const onHeaderMenuClick = () => {
    setIsHeaderMenuActive((prevState) => !prevState);
  };

  const onHeaderEnterClick = () => {
    dispatch(changeIsOpenUserEnter(userEnter.isOpen));
    dispatch(changeIsOpenRegistration(true));
  };

  const getWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', getWindowWidth);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', getWindowWidth);
    }
  }, []);

  return (
    <header className={classNames(
      style.header,
      { [style.header__open]: isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP },
    )}>
      <HeaderOrderDataWrapper
        isHeaderMenuActive={isHeaderMenuActive}
        windowWidth={windowWidth}
        isAuth={isAuth}
        itemsInTheBasket={itemsInTheBasket}
        onHeaderMenuClick={onHeaderMenuClick}
        onBasketButtonClick={handlerButtonBasketClick}
        onClick={onHeaderEnterClick}
      />
      <HeaderNavWrapper
        isHeaderMenuActive={isHeaderMenuActive}
        windowWidth={windowWidth}
        isAuth={isAuth}
        itemsInTheBasket={itemsInTheBasket}
        scrollHeight={scrollHeight}
        isProductsMenuActive={isProductsMenuActive}
        onProductsMenuClick={onProductsMenuClick}
        onBasketButtonClick={handlerButtonBasketClick}
      />
    </header >
  );
};

export default Header;