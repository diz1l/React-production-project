import React from 'react';
// @ts-ignore
import { ComponentStory, ComponentMeta } from '@storybook/react-webpack5';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ErrorPage } from './ErrorPage';

export default {
    title: 'widget/ErrorPage',
    component: ErrorPage,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof ErrorPage>;

// @ts-ignore
const Template: ComponentStory<typeof ErrorPage> = (args) => <ErrorPage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
