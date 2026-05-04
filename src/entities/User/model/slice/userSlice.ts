import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_KEY } from 'shared/const/localstorage';
import { UserSchema, UserType } from '../types/user';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<UserType>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state, action: PayloadAction<UserType>) => {
          state.authData = undefined;
          localStorage.removeItem(LOCAL_STORAGE_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
