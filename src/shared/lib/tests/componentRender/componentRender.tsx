import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StateSchema, createReduxStore } from 'app/providers/StoreProvider';
import i18nForTests from 'shared/config/i18n/i18n';

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
    const {
        route = '/',
        initialState,
    } = options;

    const store = createReduxStore(initialState as StateSchema);

    return render(
        <MemoryRouter initialEntries={[route]}>
            <Provider store={store}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </Provider>
        </MemoryRouter>,
    );
}
