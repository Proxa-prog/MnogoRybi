import React, { InputHTMLAttributes, MouseEventHandler, useState } from 'react';
import classNames from 'classnames';

import styles from './Checkbox.module.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

type Checkbox = 'not_active' | 'active' | 'not_active_disabled' | 'active_disabled';

interface CheckboxProps extends HtmlInputProps {
    onChange: () => void;
    className: string;
    variant: Checkbox;
    checked: boolean;
    label: string;
    disabled: boolean;
}

const Checkbox = (props: CheckboxProps) => {
    const {
        className,
        variant,
        type,
        checked,
        label,
        disabled,
    } = props;

    return (
        <>
            <label
                htmlFor={styles.checkbox}>
                {label}
            </label>
            <input
                id={styles.checkbox}
                type="checkbox"
                className={classNames(
                    styles.checkbox,
                    styles[variant],
                    [
                        styles[type],
                        className,
                    ]
                )}
                disabled={disabled}
            />
        </>

    );
}

export default Checkbox;