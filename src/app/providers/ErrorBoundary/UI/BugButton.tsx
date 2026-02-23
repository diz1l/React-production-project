import { ButtonEl } from '@/shared/UI';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

//TEST ERROR
export function BugButton() {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const throwError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error('Test error');
        }
    }, [error]);

    return (
        <ButtonEl type="button" onClick={throwError}>
            {t('Throw error')}
        </ButtonEl>
    );
}

export default BugButton;