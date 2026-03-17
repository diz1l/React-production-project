import {
    InputHTMLAttributes, ReactNode, memo, useState,
} from 'react';
import { classNames } from 'shared/lib';
import { ButtonEl } from 'shared/UI';
import classes from './Input.module.scss';

export enum InputTheme {
    OUTLINE = 'outline',
    GHOST = 'ghost',
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    theme?: InputTheme;
    icon?: ReactNode;
    value?: string;
    onChange?: (event: string) => void;
}

export const InputEl = memo((props: InputProps) => {
    const {
        className,
        theme = InputTheme.OUTLINE,
        icon,
        value,
        onChange,
        type = 'text',
        ...otherProps
    } = props;

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    return (
        <div className={classNames(classes.inputWrap, {}, [className])}>
            {icon && <span className={classes.icon}>{icon}</span>}
            <input
                className={classNames(classes.input, {}, [theme ? classes[theme] : '', icon ? classes.withIcon : ''])}
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
