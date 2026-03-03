import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'app/styles/index.scss';

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
        (Story) => (
            <div className="app light-mode">
                <Story />
            </div>
        ),
    ],
};

export default preview;
