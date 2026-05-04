import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserType, userActions } from 'entities/User';
import i18n from 'i18next';
import { LOCAL_STORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    userName: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<UserType, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<UserType>(`${__API__}/login`, {
                username: authData.userName,
                password: authData.password,
            });
            if (!response.data) {
                throw new Error('No data in response');
            }

            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(i18n.t('Вы ввели не правильный логин или пароль'));
        }
    },
);
