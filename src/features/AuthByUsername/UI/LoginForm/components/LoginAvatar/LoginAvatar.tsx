import { FiUser } from 'react-icons/fi';
import classes from '../../LoginForm.module.scss';

export const LoginAvatar = () => (
    <div className={classes.avatarWrap}>
        <FiUser className={classes.avatarIcon} />
    </div>
);
