import React, { InputHTMLAttributes } from "react";
import classNames from "classnames";

import styles from './Input.module.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

type Variant = 'normal' | 'value' | 'error';

interface InputProps extends HtmlInputProps {
    className?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (value: string, name?: string) => void;
    readonly?: boolean;
    variant?: Variant;
    label: string;
    media: string;
    error?: string;
    required?: boolean;
}

const Input = (props: InputProps) => {
    const {
        className,
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
    } = props;

    return (
        <div className={styles.inputWrapper}>
            <input
                className={classNames(
                    styles.desktop,
                    styles[variant],
                    [
                        styles[media],
                        className,
                    ]
                )}
                id={name}
                type="text"
                placeholder={placeholder}
                readOnly={readonly}
                value={value}
                required={required}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    onChange(event.target.value, name)
                }}

            />
            <label
                htmlFor={name}
                className={styles.labelInput}
            >
                {label}
            </label>
            {error && <span className={styles.error_message_text}>
                {error}
            </span>}
        </div>
    );
};

export default Input;