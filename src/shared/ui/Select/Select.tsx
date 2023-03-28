import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';
import React,
{ FC, SelectHTMLAttributes, useState }
from 'react';

import { IProducts } from 'entities/basket/model/types/basketTypes';

import { IContactsCard } from 'entities/contact';

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

export const Select: FC<SelectProps> = (props) => {
  const {
    name,
    id,
    options,
    className,
    disabled,
    promptOption,
    onChange,
  } = props;
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectOption, setSelectOption] = useState(promptOption);

  const handleSelectClick = () => {
    setIsOpen(prev => !prev);
  };

  const handleOptionClick = (option: IContactsCard | IProducts) => {
    console.log(option);

    return () => {
      onChange && onChange(option.name);
      setValue(option.name);
      setSelectOption(option.name)
      setIsOpen(prev => !prev);
    }
  };

  return (
    <>
      <select
        className={classNames(
          style.select_default,
          className,
          {
            // [style.closed]: isOpen,
          }
        )}
      hidden={isOpen}
      name={name}
      id={id}
      required
      disabled={disabled}
      defaultValue="Default"
      onChange={(event) => {
        onChange && onChange(event.target.value);
        setValue(event.target.value);
      }}
      value={value}
      onClick={handleSelectClick}
      >
      <option
        value="Default"
        disabled={disabled}
        hidden
      >
        {selectOption}
      </option>
    </select>
      {
    isOpen &&
      <ul className={style.isOpen}>
        {options.map((option: IProducts) => {
          const id = nanoid();

          return (
            <li
              className={style.list_item}
              key={id}
              onClick={handleOptionClick(option)}
            >
              {option.name}
            </li>
          )
        })}
      </ul>
  }
    </>
  );
};
