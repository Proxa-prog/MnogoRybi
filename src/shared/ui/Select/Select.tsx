import React, {
  FC,
  SelectHTMLAttributes,
  useState,
} from 'react';
import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';

import { IProducts } from 'entities/basket';
import { IContactsCard } from 'entities/contact';

import style from './Select.module.scss';

type HtmlSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>;

export interface SelectProps extends HtmlSelectProps {
  name?: string;
  id?: string;
  options: IProducts[];
  className?: string;
  classNameWrapper?: string;
  classNameList?: string;
  disabled?: boolean;
  promptOption?: string;
  onChange?: (baseProd: string, checked: boolean) => void;
}

export const Select: FC<SelectProps> = (props) => {
  const {
    name,
    id,
    options,
    className,
    classNameWrapper,
    classNameList,
    disabled,
    promptOption,
    onChange,
  } = props;
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectOption, setSelectOption] = useState(promptOption);

  const closeSelect = (event: { target: HTMLInputElement; }) => {
    event.target.id !== id
      ? setIsOpen(false)
      : setIsOpen(true)
  }

  const handleSelectClick = () => {
    setIsOpen((prev) => !prev);
    // @ts-ignore
    addEventListener('click', closeSelect);
  };

  const handleOptionClick = (option: IContactsCard | IProducts) => {
    return () => {
      onChange && onChange(option.name, isOpen);
      setValue(option.name);
      setSelectOption(option.name);
      setIsOpen((prev) => !prev);
    };
  };

  return (
    <div className={classNames(classNameWrapper)}>
      <select
        className={classNames(style.selectDefault, className)}
        hidden={isOpen}
        name={name}
        id={id}
        required
        disabled={disabled}
        defaultValue='Default'
        onChange={(event: any) => {
          onChange && onChange(event.target.value, event.currentTarget.checked);
          setValue(event.target.value);
        }}
        value={value}
        onClick={handleSelectClick}
      >
        <option
          value='Default'
          disabled={disabled}
          hidden
          className={style.withCost}
        >
          {selectOption}
        </option>
      </select>
      {isOpen && (
        <ul className={classNames(style.isOpen, {}, [classNameList])}>
          {options.map((option: IProducts) => {
            const id = nanoid();

            return (
              <li
                className={style.listItem}
                key={id}
                onClick={handleOptionClick(option)}
              >
                {option.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
