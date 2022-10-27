import React from "react";

import styles from './Input.module.scss';

interface IProps {
    placeholder: string;
    name: string;
    children: string;
}

const Input = (props: IProps) => {
    const {
        placeholder,
        name,
        children,
    } = props;

    return (
        <div className={styles.inputWrapper}>
            <label
                htmlFor={name}
                className={styles.labelInput}
            >
                {children}
            </label>
            <input
                className={styles.Input}
                id={name}
                type="text"
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;