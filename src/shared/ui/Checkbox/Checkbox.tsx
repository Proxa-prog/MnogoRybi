import React, { InputHTMLAttributes, useState } from 'react';
import classNames from 'classnames';

import styles from './Checkbox.module.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onClick'>;

interface CheckboxProps extends HtmlInputProps {
    className?: string;
    label?: string;
    disabled?: boolean;
    isCircle?: boolean;
    checked?: boolean;
}

const Checkbox = (props: CheckboxProps) => {
    const {
        className,
        isCircle,
        label,
        disabled,
        checked,
    } = props;

    const [isChecked, setIsChecked] = useState(checked);

    const handleOnClick = () => {
        setIsChecked(!isChecked);
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
                checked={isChecked}
                onClick={handleOnClick}
            />
        </>
    );
}

export default Checkbox;