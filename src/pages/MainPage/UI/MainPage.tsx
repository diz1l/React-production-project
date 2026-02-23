import { BugButton } from '@/app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

export default function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div className="main-page">
            <h1>{t('title')}</h1>
            <BugButton />
        </div>
    );
}
