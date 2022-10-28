import React, { InputHTMLAttributes } from "react";
import classNames from "classnames";

import styles from './Input.module.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HtmlInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string, name?: string) => void;
    readonly?: boolean;
    variant?: string;
    label: string;
    media: string;
}

const Input = (props: InputProps) => {
    const {
        placeholder,
        name,
        label,
        variant,
        media,
    } = props;

    return (
        <div className={styles.inputWrapper}>
            <label
                htmlFor={name}
                className={styles.labelInput}
            >
                {label}
            </label>
            <input
                className={classNames(styles.desktop, styles[variant], styles[media])}
                id={name}
                type="text"
                placeholder={placeholder}
            />
            <span className={styles.error_message_text}>
                {variant === 'error_message' ? 'Error message' : ''}
            </span>
        </div>
    );
};

export default Input;