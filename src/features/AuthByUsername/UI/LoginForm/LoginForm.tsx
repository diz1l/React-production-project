import {
 FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { ButtonEl } from 'shared/UI';
import { ButtonTheme } from 'shared/UI/Button/Ui/ButtonEl';
import { Text, TextTheme } from 'shared/UI/Text/Text';
import { InputEl } from 'shared/UI/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginByUserName } from '../../model/services/loginByUserName';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import { UserIcon } from './components/Icon/UserIcon';
import { LockIcon } from './components/Icon/LockIcon';
import { LoginAvatar } from './components/LoginAvatar/LoginAvatar';
import { LoginHeader } from './components/LoginHeader/LoginHeader';
import { LoginFooter } from './components/LoginFooter/LoginFooter';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation('translation', { useSuspense: false });
    const [showPassword, setShowPassword] = useState(false);
    const inputType = showPassword ? 'text' : 'password';

    const dispatch = useDispatch();
    const loginForm = useSelector(getLoginState);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ userName: loginForm.userName, password: loginForm.password }));
    }, [dispatch, loginForm.userName, loginForm.password]);

    return (
        <div className={[classes.loginForm, className].filter(Boolean).join(' ')}>

            {loginForm.error && <Text text={loginForm.error} theme={TextTheme.ERROR} />}

            <LoginAvatar />
            <LoginHeader />

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
                        onChange={onChangeUserName}
                        value={loginForm.userName}
                    />
                </div>

                <div className={classes.field}>
                    <div className={classes.labelRow}>
                        <label className={classes.label} htmlFor="login-password">
                            {t('Password')}
                        </label>
                        <span className={classes.forgotLink}>{t('Forgot password?')}</span>
                    </div>
                    <div className={classes.passwordWrap}>
                        <InputEl
                            id="login-password"
                            type={inputType}
                            placeholder={t('Enter your password')}
                            icon={LockIcon}
                            onChange={onChangePassword}
                            value={loginForm.password}
                        />
                        <button
                            type="button"
                            className={classes.togglePassword}
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                    </div>
                </div>
            </div>

            <ButtonEl
                className={classes.submitBtn}
                theme={ButtonTheme.PRIMARY}
                type="button"
                onClick={onLoginClick}
                disabled={loginForm?.isLoading}
            >
                {t('Sign in')}
            </ButtonEl>

            <LoginFooter />
        </div>
    );
});
