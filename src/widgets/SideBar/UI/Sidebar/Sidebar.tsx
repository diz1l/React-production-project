import { FC, useState } from 'react';
import { classNames } from 'shared/lib';
import classes from './Sidebar.module.scss';
import { ButtonEl } from 'shared/UI';
import { ButtonTheme } from 'shared/UI/Button/Ui/ButtonEl';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className, children } = props;
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                classes.sidebar,
                { [classes.collapsed]: collapsed },
                [className],
            )}
        >
            <ButtonEl
                data-testid="toggle-button"
                theme={ButtonTheme.CLEAR}
                className={classes.toggle}
                onClick={toggleSidebar}
                aria-label="toggle-sidebar"
            >
                ☰
            </ButtonEl>
        </div>
    );
};

export default Sidebar;
