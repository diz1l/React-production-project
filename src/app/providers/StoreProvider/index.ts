import { StoreProvider } from 'app/providers/StoreProvider/UI/StoreProvider';
import { createReduxStore, createReducerManager } from 'app/providers/StoreProvider/config/store';
import {
    StateSchema,
    StateSchemaKey,
    ReducerManager,
    ReduxStoreWithManager,
    MountedReducers,
} from 'app/providers/StoreProvider/config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    createReducerManager,
    StateSchema,
    StateSchemaKey,
    ReducerManager,
    ReduxStoreWithManager,
    MountedReducers,
};
