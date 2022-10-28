import React, { InputHTMLAttributes, MouseEventHandler, useState } from 'react';
import classNames from 'classnames';

import styles from './Checkbox.module.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onClick'>;

interface CheckboxProps extends HtmlInputProps {
    onClick: () => void;
    variant: string;
}

const Checkbox = (props: CheckboxProps) => {
    const {
        variant,
        type,
    } = props;

    const [isChecked, setIsChecked] = useState(true);

    return (
        <input
            type="checkbox"
            className={classNames(
                styles.not_active,
                styles[variant],
                styles[isChecked ? 'not_active' : 'active'],
                styles[variant],
                styles[type]
            )}
            disabled={
                variant === 'not_active_disabled' ||
                    variant === 'active_disabled' ?
                    true :
                    false
            }
            onClick={() => setIsChecked((prev: boolean) => !prev)}
        />
    );
}

export default Checkbox;