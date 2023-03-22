import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';
import React,
{ChangeEventHandler, FC, SelectHTMLAttributes, useState}
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
  classNameList?: string;
  disabled?: boolean;
  promptOption?: string;
  onChange?: (baseProd: string, checked: boolean) => void;
}

const Select: FC<SelectProps> = (props) => {
  const {
    name,
    id,
    options,
    className,
    classNameList,
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

    return () => {
      onChange && onChange(option.name, isOpen);
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
      onChange={(event: any) => {
        onChange && onChange(event.target.value, event.currentTarget.checked);
        setValue(event.target.value);
      }}
      value={value}
      onClick={handleSelectClick}
      >
      <option
        value="Default"
        disabled={disabled}
        hidden
        className={style.with_cost}
      >
        {selectOption}
      </option>
    </select>
      {
    isOpen &&
      <ul className={classNames(style.isOpen, {}, [classNameList])}>
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

export default Select;
