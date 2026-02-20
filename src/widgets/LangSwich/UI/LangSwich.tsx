import { useTranslation } from 'react-i18next';
import classes from './LangSwich.module.scss';
import { ButtonEl } from '@/shared/UI';
import { ButtonTheme } from '@/shared/UI/Button/Ui/ButtonEl';

export function LangSwich() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <div className={classes.root} aria-live="polite">
            <div className={classes.row}>
                <div className={classes.actions}>
                    <ButtonEl theme={ButtonTheme.CLEAR} className={classes.btn} onClick={toggleLanguage} aria-label="toggle-language">
                        {t('Translation / Перевод')}
                    </ButtonEl>
                </div>
            </div>
        </div>
    );
}
