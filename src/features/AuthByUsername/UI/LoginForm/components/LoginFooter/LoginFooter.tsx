import { useTranslation } from 'react-i18next';
import classes from '../../LoginForm.module.scss';

export const LoginFooter = () => {
    const { t } = useTranslation('translation', { useSuspense: false });

    return (
        <p className={classes.footer}>
            {t("Don't have an account?")}
            {' '}
            <span className={classes.footerLink}>{t('Sign up')}</span>
        </p>
    );
};
