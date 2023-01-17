import React, { FC } from 'react';

import classNames from 'classnames';

import style from './ComponentWrapper.module.scss';

export interface ComponentWrapperProps {
  className?: string;
  title?: string;
  children: JSX.Element | JSX.Element[];
}

const ComponentWrapper: FC<ComponentWrapperProps> = (props) => {
  const {
    className = '',
    title,
    children,
  } = props;

  return (
    <section className={classNames(
      style.default,
      style[className],
    )}>
      <h2 className='visually-hidden'>{title}</h2>
      {children}
    </section>
  );
};

export default ComponentWrapper;
