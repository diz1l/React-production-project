import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonEl } from 'shared/UI';
import { ButtonTheme } from 'shared/UI/Button/Ui/ButtonEl';
import { InputEl } from 'shared/UI/Input';
import classes from './RegisterForm.module.scss';

interface RegisterFormProps {
    className?: string;
}

const UserIcon = (
    <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

const EmailIcon = (
    <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

const LockIcon = (
    <svg viewBox="0 0 24 24" fill="none">
        <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 11V7a4 4 0 1 1 8 0v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

const CheckIcon = (
    <svg viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
);

export const RegisterForm: FC<RegisterFormProps> = ({ className }) => {
    const { t } = useTranslation('translation', { useSuspense: false });

    return (
        <div className={[classes.registerForm, className].filter(Boolean).join(' ')}>

            <div className={classes.avatarWrap}>
                <svg className={classes.avatarIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M12 14v6M9 17h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            </div>

            <div className={classes.header}>
                <h2 className={classes.title}>{t('Create account')}</h2>
                <p className={classes.subtitle}>{t('Fill in the details below to get started')}</p>
            </div>

            <div className={classes.fields}>
                <div className={classes.field}>
                    <label className={classes.label} htmlFor="register-username">
                        {t('Username')}
                    </label>
                    <InputEl
                        id="register-username"
                        type="text"
                        placeholder={t('Choose a username')}
                        icon={UserIcon}
                        readOnly
                    />
                </div>

                <div className={classes.field}>
                    <label className={classes.label} htmlFor="register-email">
                        {t('Email')}
                    </label>
                    <InputEl
                        id="register-email"
                        type="email"
                        placeholder={t('Enter your email')}
                        icon={EmailIcon}
                        readOnly
                    />
                </div>

                <div className={classes.row}>
                    <div className={classes.field}>
                        <label className={classes.label} htmlFor="register-password">
                            {t('Password')}
                        </label>
                        <InputEl
                            id="register-password"
                            type="password"
                            placeholder={t('Create password')}
                            icon={LockIcon}
                            readOnly
                        />
                    </div>

                    <div className={classes.field}>
                        <label className={classes.label} htmlFor="register-confirm">
                            {t('Confirm')}
                        </label>
                        <InputEl
                            id="register-confirm"
                            type="password"
                            placeholder={t('Repeat password')}
                            icon={CheckIcon}
                            readOnly
                        />
                    </div>
                </div>
            </div>

            <ButtonEl
                className={classes.submitBtn}
                theme={ButtonTheme.PRIMARY}
                type="button"
            >
                {t('Create account')}
            </ButtonEl>

            <p className={classes.footer}>
                {t('Already have an account?')}
                {' '}
                <span className={classes.footerLink}>{t('Sign in')}</span>
            </p>
        </div>
    );
};
