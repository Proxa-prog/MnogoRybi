import React, { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Checkbox.module.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface CheckboxProps extends HtmlInputProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  isCircle?: boolean;
  checked?: boolean;
  onChange: (event: boolean) => void;
  onClick?: () => void;
  classNameLabel?: string;
  id?: string;
}

export const Checkbox: FC<CheckboxProps> = (props) => {
  const {
    className,
    isCircle,
    label,
    disabled,
    checked,
    id,
    onChange,
    onClick,
  } = props;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <>
      <input
        checked={checked}
        id={id}
        type="checkbox"
        className={classNames(
          styles.checkbox,
          { [styles.circle]: isCircle },
          [className],
        )}
        disabled={disabled}
        onChange={handleOnChange}
        onClick={(event) => { !event.currentTarget.checked; onClick && onClick() }}
      />
      {
        label
        &&
        <label
          className={classNames(styles.label, {}, [])}
          htmlFor={id}
        >
          {label}
        </label>
      }
    </>
  );
};
