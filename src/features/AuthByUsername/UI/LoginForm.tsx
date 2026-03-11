import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonEl } from 'shared/UI';
import { ButtonTheme } from 'shared/UI/Button/Ui/ButtonEl';
import { InputEl } from 'shared/UI/Input';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const UserIcon = (
    <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

const LockIcon = (
    <svg viewBox="0 0 24 24" fill="none">
        <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 11V7a4 4 0 1 1 8 0v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation('translation', { useSuspense: false });

    return (
        <div className={[classes.loginForm, className].filter(Boolean).join(' ')}>
            <div className={classes.avatarWrap}>
                <svg className={classes.avatarIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
                    <path
                        d="M4 20c0-4 3.582-7 8-7s8 3 8 7"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            <div className={classes.header}>
                <h2 className={classes.title}>{t('Welcome back')}</h2>
                <p className={classes.subtitle}>{t('Sign in to your account')}</p>
            </div>

            <div className={classes.fields}>
                <div className={classes.field}>
                    <label className={classes.label} htmlFor="login-username">
                        {t('Username')}
                    </label>
                    <InputEl
                        id="login-username"
                        type="text"
                        placeholder={t('Enter your username')}
                        icon={UserIcon}
                        readOnly
                    />
                </div>

                <div className={classes.field}>
                    <div className={classes.labelRow}>
                        <label className={classes.label} htmlFor="login-password">
                            {t('Password')}
                        </label>
                        <span className={classes.forgotLink}>{t('Forgot password?')}</span>
                    </div>
                    <InputEl
                        id="login-password"
                        type="password"
                        placeholder={t('Enter your password')}
                        icon={LockIcon}
                        readOnly
                    />
                </div>
            </div>

            <ButtonEl
                className={classes.submitBtn}
                theme={ButtonTheme.PRIMARY}
                type="button"
            >
                {t('Sign in')}
            </ButtonEl>

            <p className={classes.footer}>
                {t("Don't have an account?")}
                {' '}
                <span className={classes.footerLink}>{t('Sign up')}</span>
            </p>
        </div>
    );
};
