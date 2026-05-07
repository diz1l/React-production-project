import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/UI/Modal';
import { Suspense } from 'react';
import { LoginFormAsync } from 'features/AuthByUsername/UI/LoginForm/LoginForm.async';
import { Loader } from 'shared/UI/Loader';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    isClose?: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, isClose } = props;
    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            isClose={isClose}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
