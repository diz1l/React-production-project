import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import { Navbar, Sidebar } from 'widgets';

export default function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <div className="content-page">
                    <Sidebar>xsaxslxaknsk</Sidebar>
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
