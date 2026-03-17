import { classNames } from 'shared/lib/classNames/classNames';
import {
 lazy, useCallback, useEffect, useState, 
} from 'react';
import { Portal } from 'shared/UI/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    isClose?: () => void;
}

export const Modal = (props: ModalProps) => {
    const [modalLoaded, setModalLoaded] = useState(false);

    const {
        className,
        children,
        isOpen,
        isClose,
    } = props;

    const closeHandler = useCallback(() => {
        if (isClose) {
            isClose();
        }
    }, [isClose]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const mods : Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    useEffect(() => {
        if (isOpen) {
            setModalLoaded(true);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (lazy && !modalLoaded) {
        return null;
    }
        return (
            <Portal>
                <div className={classNames(cls.Modal, mods, [className])}>
                    <div className={cls.overlay} onClick={closeHandler}>
                        <div className={cls.content} onClick={onContentClick}>
                            {children}
                        </div>
                    </div>
                </div>
            </Portal>
        );
};
