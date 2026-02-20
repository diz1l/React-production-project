import { useTranslation } from 'react-i18next';

export default function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div className="mainPage">
            <h1>{t('title')}</h1>
        </div>
    );
}
