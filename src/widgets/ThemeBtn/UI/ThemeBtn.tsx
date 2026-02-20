import { classNames } from '@/shared/lib';
import classes from './Theme.module.scss';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Theme } from '@/app/providers/ThemeProvider/UI/ThemeContext';
import { ButtonEl } from '../../../shared/UI/Button';

interface ThemeBtnProps {
  className?: string;
}

export function ThemeBtn({ className }: ThemeBtnProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <ButtonEl
            className={classNames(classes.themeBtn, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? 'Dark' : 'Light'}
        </ButtonEl>
    );
}
