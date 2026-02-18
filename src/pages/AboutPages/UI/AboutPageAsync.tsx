import {lazy} from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // this is just for demonstration of lazy loading
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}));