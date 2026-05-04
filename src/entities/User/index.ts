import { userSlice, userReducer, userActions } from './model/slice/userSlice';
import { UserType, UserSchema } from './model/types/user';
import { getAuthUserData } from './model/selector/getAuthUserData';

export {
    userSlice,
    userReducer,
    userActions,
    UserType,
    UserSchema,
    getAuthUserData,
};
