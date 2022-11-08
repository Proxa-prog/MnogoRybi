import classNames from 'classnames';
import React, { FC, SelectHTMLAttributes } from 'react';

import style from './Select.module.scss';

type HtmlSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>;

export interface SelectProps extends HtmlSelectProps {
  name?: string;
  id?: string;
  options: string[];
  className?: string;
  disabled?: boolean;
}

const Select: FC<SelectProps> = (props) => {
  const {
    name,
    id,
    options,
    className,
    disabled,
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
    >
      <option selected disabled hidden>Адрес не выбран</option>
      {options.map((option: string) => (
        <option>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
