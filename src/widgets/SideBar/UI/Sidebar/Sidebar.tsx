import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib';
import { ButtonEl } from 'shared/UI';
import { ButtonTheme } from 'shared/UI/Button/Ui/ButtonEl';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
    defaultCollapsed?: boolean;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className, defaultCollapsed = false } = props;
    const [collapsed, setCollapsed] = useState(defaultCollapsed);
    const { t } = useTranslation('nav', { useSuspense: false });
    const location = useLocation();

    const toggleSidebar = () => {
        setCollapsed((prev) => !prev);
    };

    const isActive = (path: string) => location.pathname === path;

    return (
        <aside
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
                {collapsed ? '→' : '←'}
            </ButtonEl>

            <nav className={classes.nav}>
                <Link
                    to="/"
                    className={classNames(
                        classes.navItem,
                        { [classes.active]: isActive('/') },
                    )}
                >
                    <span className={classes.navIcon}>🏠</span>
                    <span className={classes.navLabel}>{t('main')}</span>
                </Link>

                <Link
                    to="/about"
                    className={classNames(
                        classes.navItem,
                        { [classes.active]: isActive('/about') },
                    )}
                >
                    <span className={classes.navIcon}>ℹ️</span>
                    <span className={classes.navLabel}>{t('about')}</span>
                </Link>
            </nav>
        </aside>
    );
};

export default Sidebar;
