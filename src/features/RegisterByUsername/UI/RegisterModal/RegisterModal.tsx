import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/UI/Modal';
import cls from './RegisterModal.module.scss';
import { RegisterForm } from '../RegisterForm/RegisterForm';

interface RegisterModalProps {
    className?: string;
    isOpen?: boolean;
    isClose?: () => void;
}

export const RegisterModal = (props: RegisterModalProps) => {
    const { className, isOpen, isClose } = props;
    return (
        <Modal
            className={classNames(cls.RegisterModal, {}, [className])}
            isOpen={isOpen}
            isClose={isClose}
        >
            <RegisterForm />
        </Modal>
    );
};
