import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import style from './BlockHeader.module.scss';

export interface BlockHeaderProps {
  className?: string;
  pageName: string;
  previousPages?: string[];
  children?: JSX.Element;
}

export const BlockHeader: FC<BlockHeaderProps> = (props) => {
  const {
    className,
    pageName,
    previousPages,
    children,
  } = props;

  return (
    <div className={classNames(
      style.default,
      className,
    )}>
      <p className={style.nav}>
        <>
          <Link to='/'>
            <span>Главная</span>
          </Link>
          {
            previousPages && previousPages.map((name: string, index: number) => {

              return (
                <span key={index}>
                  &nbsp; &mdash; &nbsp;
                  <Link to='/news'>
                    <span>{name}</span>
                  </Link>
                </span>
              )
            })
          }
          &nbsp; &mdash; &nbsp;
          {pageName}
        </>
      </p>
      <h1>{pageName}</h1>
      {children}
    </div>
  )
}
