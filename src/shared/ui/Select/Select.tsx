import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';
import React,
{ FC, SelectHTMLAttributes }
  from 'react';
import { IProducts } from 'entities/constants/constants';

import style from './Select.module.scss';

type HtmlSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>;

export interface SelectProps extends HtmlSelectProps {
  name?: string;
  id?: string;
  options: IProducts[];
  className?: string;
  disabled?: boolean;
  promptOption?: string;
  onChange?: (baseProd: string) => void;
}

const Select: FC<SelectProps> = (props) => {
  const {
    name,
    id,
    options,
    className,
    disabled,
    promptOption,
    onChange,
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
      onChange={(event) => onChange && onChange(event.target.value)}
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
