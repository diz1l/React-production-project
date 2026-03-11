import { InputHTMLAttributes, FC, ReactNode } from 'react';
import { classNames } from 'shared/lib';
import classes from './Input.module.scss';

export enum InputTheme {
    OUTLINE = 'outline',
    GHOST = 'ghost',
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    theme?: InputTheme;
    icon?: ReactNode;
}

export const InputEl: FC<InputProps> = (props) => {
    const {
        className,
        theme = InputTheme.OUTLINE,
        icon,
        ...otherProps
    } = props;

    return (
        <div className={classNames(classes.inputWrap, {}, [className])}>
            {icon && <span className={classes.icon}>{icon}</span>}
            <input
                className={classNames(classes.input, {}, [theme ? classes[theme] : '', icon ? classes.withIcon : ''])}
                {...otherProps}
            />
        </div>
    );
};
