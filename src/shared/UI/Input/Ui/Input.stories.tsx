import React from 'react';
// @ts-ignore
import { ComponentMeta, ComponentStory } from '@storybook/react-webpack5';
import { FiUser, FiLock, FiSearch } from 'react-icons/fi';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { InputEl, InputTheme } from './InputEl';

export default {
    title: 'shared/Input',
    component: InputEl,
} as ComponentMeta<typeof InputEl>;

// @ts-ignore
const Template: ComponentStory<typeof InputEl> = (args) => <InputEl {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: 'Enter text...',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    placeholder: 'Username',
    icon: <FiUser />,
};

export const Password = Template.bind({});
Password.args = {
    placeholder: 'Password',
    type: 'password',
    icon: <FiLock />,
};

export const Ghost = Template.bind({});
Ghost.args = {
    placeholder: 'Search...',
    theme: InputTheme.GHOST,
    icon: <FiSearch />,
};

export const Disabled = Template.bind({});
Disabled.args = {
    placeholder: 'Disabled',
    disabled: true,
    icon: <FiUser />,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
    placeholder: 'Enter text...',
    icon: <FiUser />,
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const GhostDark = Template.bind({});
GhostDark.args = {
    placeholder: 'Search...',
    theme: InputTheme.GHOST,
    icon: <FiSearch />,
};
GhostDark.decorators = [ThemeDecorator(Theme.DARK)];
