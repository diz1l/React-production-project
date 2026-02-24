import { classNames } from 'shared/lib';
import classes from './Theme.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { ButtonEl } from '../../../shared/UI/Button';
import { ButtonTheme } from 'shared/UI/Button/Ui/ButtonEl';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

interface ThemeBtnProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeBtnProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <ButtonEl
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? 'Dark' : 'Light'}
        </ButtonEl>
    );
}
