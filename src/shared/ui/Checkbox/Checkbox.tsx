import React, { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Checkbox.module.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface CheckboxProps extends HtmlInputProps {
    onChange?: () => void;
    className?: string;
    label?: string;
    disabled?: boolean;
    isCircle?: boolean;
}

const Checkbox = (props: CheckboxProps) => {
    const {
        onChange,
        className,
        isCircle,
        label,
        disabled,
    } = props;

    return (
        <>
            <label
                htmlFor={styles.checkbox}
                className="visually-hidden"
            >
                {label}
            </label>
            <input
                id={styles.checkbox}
                type="checkbox"
                className={classNames(
                    styles.checkbox,
                    [
                        styles[isCircle ? 'circle' : ''],
                        className,
                    ]
                )}
                disabled={disabled}
                onChange={() => { onChange() }}
            />
        </>

    );
}

export default Checkbox;