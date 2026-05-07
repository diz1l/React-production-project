import { StateSchema } from 'app/providers/StoreProvider';
import { LoginSchema } from '../../types/loginSchema';

const defaultLoginState: LoginSchema = {
    userName: '',
    password: '',
    isLoading: false,
};

export const getLoginState = (state: StateSchema) => state?.login ?? defaultLoginState;
