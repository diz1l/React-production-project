import { RouteProps } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPages';

export enum AppConfig {
    MAIN = '/main',
    ABOUT = '/about',
    ERROR = '/error',
}

export const RoutePath: Record<AppConfig, string> = {
    [AppConfig.MAIN]: '/',
    [AppConfig.ABOUT]: '/about',
    [AppConfig.ERROR]: '*',
};

export const routeConfig: Record<AppConfig, RouteProps> = {
    [AppConfig.MAIN]: {
        path: RoutePath[AppConfig.MAIN],
        element: <MainPage />,
    },
    [AppConfig.ABOUT]: {
        path: RoutePath[AppConfig.ABOUT],
        element: <AboutPage />,
    },
    [AppConfig.ERROR]: {
    },
};
