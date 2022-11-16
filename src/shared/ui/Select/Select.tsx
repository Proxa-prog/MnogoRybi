import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';
import React, { FC, SelectHTMLAttributes } from 'react';
import { IProducts } from 'constants/constants';

import style from './Select.module.scss';

type HtmlSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>;

export interface SelectProps extends HtmlSelectProps {
  name?: string;
  id?: string;
  options: IProducts[];
  className?: string;
  disabled?: boolean;
  promptOption?: string;
}

const Select: FC<SelectProps> = (props) => {
  const {
    name,
    id,
    options,
    className,
    disabled,
    promptOption,
  } = props;

  return (
    <select
      className={classNames(
        style.select_default,
        className,
      )}
      name={name}
      id={id}
      required
      disabled={disabled}
      defaultValue="Default"
    >
      <option
        value="Default"
        disabled={disabled}
        hidden
      >
        {promptOption}
      </option>
      {options.map((option: IProducts) => {
        const id = nanoid();

        return (
          <option key={id}>
            {option.name}
          </option>
        )
      })}
    </select>
  );
};

export default Select;
