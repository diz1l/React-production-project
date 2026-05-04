import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import i18nForTests from 'shared/config/i18n/i18n';

export default function renderWithTranslation(component: ReactNode) {
    return render(
        <Provider store={createReduxStore()}>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </Provider>,
    );
}
