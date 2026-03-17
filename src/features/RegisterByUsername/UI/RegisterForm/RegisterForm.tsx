import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FiUser } from 'react-icons/fi';
import { ButtonEl } from 'shared/UI';
import { ButtonTheme } from 'shared/UI/Button/Ui/ButtonEl';
import { InputEl } from 'shared/UI/Input';
import { UserIcon } from './Icon/UserIcon';
import { EmailIcon } from './Icon/EmailIcon';
import { LockIcon } from './Icon/LockIcon';
import classes from './RegisterForm.module.scss';

interface RegisterFormProps {
    className?: string;
}

export const RegisterForm: FC<RegisterFormProps> = ({ className }) => {
    const { t } = useTranslation('translation', { useSuspense: false });

    return (
        <div className={[classes.registerForm, className].filter(Boolean).join(' ')}>
            <div className={classes.avatarWrap}>
                <FiUser className={classes.avatarIcon} />
            </div>

            <div className={classes.header}>
                <h2 className={classes.title}>{t('Create account')}</h2>
                <p className={classes.subtitle}>{t('Fill in the form to register')}</p>
            </div>

            <div className={classes.fields}>
                <div className={classes.field}>
                    <label className={classes.label} htmlFor="register-username">
                        {t('Username')}
                    </label>
                    <InputEl
                        id="register-username"
                        type="text"
                        placeholder={t('Enter your username')}
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

                <div className={classes.field}>
                    <label className={classes.label} htmlFor="register-password">
                        {t('Password')}
                    </label>
                    <InputEl
                        id="register-password"
                        type="password"
                        placeholder={t('Enter your password')}
                        icon={LockIcon}
                        readOnly
                    />
                </div>

                <div className={classes.field}>
                    <label className={classes.label} htmlFor="register-confirm-password">
                        {t('Confirm password')}
                    </label>
                    <InputEl
                        id="register-confirm-password"
                        type="password"
                        placeholder={t('Repeat your password')}
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
                {t('Sign up')}
            </ButtonEl>

            <p className={classes.footer}>
                {t('Already have an account?')}
                {' '}
                <span className={classes.footerLink}>{t('Sign in')}</span>
            </p>
        </div>
    );
};
