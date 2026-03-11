import { FC, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import logoOfWeb from 'shared/img/logoOfWeb.png';
import { Modal } from 'shared/UI/Modal';
import { ButtonEl } from 'shared/UI';
import { ButtonTheme } from 'shared/UI/Button/Ui/ButtonEl';
import { LoginForm } from 'features/AuthByUsername';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();
    const { t, i18n } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    const toggleAuthModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <header className={classNames(classes.navbar, {}, [className])}>
            <Link to="/" className={classes.logoLink}>
                <div className={classes.logo}>
                    <img src={logoOfWeb} alt="Site logo" className={classes.logoImg} />
                </div>
            </Link>

            <div className={classes.spacer} />

            <ButtonEl
                theme={ButtonTheme.OUTLINE}
                type="button"
                onClick={toggleAuthModal}
            >
                {t('Login')}
            </ButtonEl>

            <Modal isOpen={isAuthModal} isClose={toggleAuthModal}>
                <LoginForm />
            </Modal>

            <div className={classes.utilities}>
                <ButtonEl
                    type="button"
                    className={classes.utilityBtn}
                    onClick={toggleLanguage}
                    aria-label="Toggle language"
                    title={i18n.language === 'en' ? 'Переключить на русский' : 'Switch to English'}
                >
                    <span className={classes.utilityIcon}>🌐</span>
                    <span className={classes.utilityLabel}>
                        {i18n.language === 'en' ? 'RU' : 'EN'}
                    </span>
                </ButtonEl>

                <ButtonEl
                    type="button"
                    className={classes.utilityBtn}
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    title={theme === Theme.LIGHT ? 'Switch to dark mode' : 'Switch to light mode'}
                >
                    <span className={classes.utilityIcon}>
                        {theme === Theme.LIGHT ? '🌙' : '☀️'}
                    </span>
                </ButtonEl>
            </div>
        </header>
    );
};
