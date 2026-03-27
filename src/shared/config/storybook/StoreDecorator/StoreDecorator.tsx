import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore, StateSchema } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (Story: React.ComponentType) => (
    <Provider store={createReduxStore(state as StateSchema)}>
        <Story />
    </Provider>
);
