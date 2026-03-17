import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/UI/Modal';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

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
            <LoginForm />
        </Modal>
    );
};
