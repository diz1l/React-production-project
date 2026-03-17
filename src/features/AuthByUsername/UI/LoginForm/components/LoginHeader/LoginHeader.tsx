import { useTranslation } from 'react-i18next';
import classes from '../../LoginForm.module.scss';

export const LoginHeader = () => {
    const { t } = useTranslation('translation', { useSuspense: false });

    return (
        <div className={classes.header}>
            <h2 className={classes.title}>{t('Welcome back')}</h2>
            <p className={classes.subtitle}>{t('Sign in to your account')}</p>
        </div>
    );
};
