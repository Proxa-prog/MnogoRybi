import React, { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Input.module.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

type Variant = 'normal' | 'value' | 'error';

export interface InputProps extends HtmlInputProps {
  label: string;
  media?: string;
  name: string;
  className?: string;
  classNameWrapper?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (value?: string, name?: string) => void;
  readonly?: boolean;
  variant?: Variant;
  error?: string;
  required?: boolean;
  type?: string;
}

const Input: FC<InputProps> = (props) => {
  const {
    className,
    classNameWrapper,
    placeholder,
    name,
    label,
    variant,
    media,
    readonly,
    value,
    onChange,
    error,
    required,
    type = 'text',
  } = props;

  return (
    <div className={classNames(
      styles.inputWrapper,
      [classNameWrapper]
    )}>
      <input
        className={classNames(
          styles.desktop,
          styles[variant as string],
          [
            media && styles[media],
            className,
          ],
        )}
        id={name}
        type={type}
        placeholder={placeholder}
        readOnly={readonly}
        value={value}
        required={required}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (onChange) {
            onChange(event.target.value, name);
          }
        }}
      />
      <label
        htmlFor={name}
        className={styles.label_input}
      >
        {label}
      </label>
      {
        error
        && (
          <span className={styles.error_message_text}>
            {error}
          </span>
        )
      }
    </div>
  );
};

export default Input;
