import React from 'react';
// @ts-ignore
import { ComponentStory, ComponentMeta } from '@storybook/react-webpack5';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    decorators: [StyleDecorator, StoreDecorator({})],
} as ComponentMeta<typeof LoginForm>;

// @ts-ignore
const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithError = Template.bind({});
WithError.args = {};
// eslint-disable-next-line max-len
WithError.decorators = [StoreDecorator({
 login: {
 userName: '', password: '', isLoading: false, error: 'Incorrect username or password',
 },
})];
