import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routerConfig/routeConfig";

const AppRouter = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {Object.entries(routeConfig).map(([routeKey, { path, element }]) => (
                        <Route key={routeKey} path={path} element={element} />
                    ))}
                </Routes>
            </Suspense>
        </div>
    );
};

export default AppRouter;