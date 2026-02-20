declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export default classNames;
}

declare module '*.svg' {
    import React from 'react';

    const contentSVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default contentSVG;
}

declare module '*.png' {
    const contentPNG: any;
    export default contentPNG;
}

declare module '*.jpg' {
    const contentJPG: any;
    export default contentJPG;
}

declare const __IS_DEV__: boolean;
