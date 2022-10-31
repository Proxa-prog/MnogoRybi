import React, { ChangeEvent, InputHTMLAttributes } from 'react';
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
}

const Checkbox = (props: CheckboxProps) => {
    const {
        className,
        isCircle,
        label,
        disabled,
        checked,
        onChange,
    } = props;

    const handleOnChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };
    
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
                        {[styles.circle]: isCircle},
                        [className],
                    ]
                )}
                disabled={disabled}
                checked={checked}
                onChange={handleOnChange}
            />
        </>
    );
}

export default Checkbox;