import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { Suspense, useEffect } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import { Navbar, Sidebar } from 'widgets';
import { PageLoader } from 'widgets/PageLoader';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

export default function App() {
    const { theme } = useTheme();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
