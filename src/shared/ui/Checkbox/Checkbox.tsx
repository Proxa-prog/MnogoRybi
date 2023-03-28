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
  classNameLabel?: string;
  id?: string;
  onChange: (event?: boolean) => void;
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
        onClick={(event) => { !event.currentTarget.checked }}
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
