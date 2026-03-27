import React from 'react';
// @ts-ignore
import { ComponentStory, ComponentMeta } from '@storybook/react-webpack5';
import { ButtonEl } from 'shared/UI';
import { ButtonTheme } from 'shared/UI/Button/Ui/ButtonEl';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export default {
    title: 'shared/Button',
    component: ButtonEl,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ButtonEl>;

// @ts-ignore
const Template: ComponentStory<typeof ButtonEl> = (args) => <ButtonEl {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Sign in',
    theme: ButtonTheme.PRIMARY,
    disabled: true,
};

export const DisabledDark = Template.bind({});
DisabledDark.args = {
    children: 'Sign in',
    theme: ButtonTheme.PRIMARY,
    disabled: true,
};
DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];

export const DisabledOutline = Template.bind({});
DisabledOutline.args = {
    children: 'Sign in',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
};
