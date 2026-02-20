import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routeConfig';
import cls from './AppRouter.module.scss';

function AppRouter() {
    return (
        <div className={cls.pageWrapper}>
            <Suspense fallback={<div className={cls.Loading}>Loading...</div>}>
                <Routes>
                    {Object.entries(routeConfig).map(([routeKey, { path, element }]) => (
                        <Route key={routeKey} path={path} element={element} />
                    ))}
                </Routes>
            </Suspense>
        </div>
    );
}

export default AppRouter;
