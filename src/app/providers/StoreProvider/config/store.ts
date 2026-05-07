import {
    AnyAction,
    CombinedState,
    combineReducers,
    configureStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import {
    MountedReducers,
    ReducerManager,
    ReduxStoreWithManager,
    StateSchema,
    StateSchemaKey,
} from './StateSchema';

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
    const reducers = { ...initialReducers };
    let combinedReducer = combineReducers(reducers);
    let keysToRemove: StateSchemaKey[] = [];
    const mountedReducers: MountedReducers = {};

    return {
        getReducerMap: () => reducers,
        getMountedReducers: () => mountedReducers,
        reduce: (state: StateSchema | undefined, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...(state as StateSchema) };
                keysToRemove.forEach((key) => {
                    delete state![key];
                });
                keysToRemove = [];
            }
            const newState = combinedReducer(state, action);
            // Preserve keys not yet registered (e.g. from preloadedState)
            // so lazy reducers can pick up their initial value when first added
            if (state) {
                (Object.keys(state) as StateSchemaKey[]).forEach((key) => {
                    if (!(key in newState)) {
                        (newState as StateSchema)[key] = state![key] as any;
                    }
                });
            }
            return newState;
        },
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) return;
            reducers[key] = reducer;
            mountedReducers[key] = true;
            combinedReducer = combineReducers(reducers);
        },
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) return;
            delete reducers[key];
            keysToRemove.push(key);
            mountedReducers[key] = false;
            combinedReducer = combineReducers(reducers);
        },
    };
}

export function createReduxStore(initialState?: StateSchema): ReduxStoreWithManager {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    (store as ReduxStoreWithManager).reducerManager = reducerManager;

    return store as ReduxStoreWithManager;
}
