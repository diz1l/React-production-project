import { classNames } from "@/shared/lib";
import { useTranslation } from "react-i18next";
import styles from './ErrorPage.module.scss';
import { ButtonEl } from "@/shared/UI";

interface ErrorPageProps {
    className?: string;
}

export function ErrorPage({ className }: ErrorPageProps) {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(styles.errorPage, {}, [className])}>
            <h1 className={styles.title}>{t('error.title')}</h1>
            <p className={styles.message}>{t('error.message')}</p>
            <ButtonEl type="button" onClick={reloadPage}>{t('Go to main page')}</ButtonEl>
        </div>
    );
}

export default ErrorPage;