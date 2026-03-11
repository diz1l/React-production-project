import React from 'react';
// @ts-ignore
import { ComponentStory, ComponentMeta } from '@storybook/react-webpack5';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { RegisterForm } from './RegisterForm';

export default {
    title: 'features/RegisterForm',
    component: RegisterForm,
    decorators: [StyleDecorator],
} as ComponentMeta<typeof RegisterForm>;

// @ts-ignore
const Template: ComponentStory<typeof RegisterForm> = (args) => <RegisterForm {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
