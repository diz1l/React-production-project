import React from 'react';
// @ts-ignore
import { ComponentStory, ComponentMeta } from '@storybook/react-webpack5';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        // @ts-ignore
        (Story) => (
            <ThemeProvider>
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof Sidebar>;

// @ts-ignore
const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const ExpandedLight = Template.bind({});
ExpandedLight.args = { defaultCollapsed: false };
ExpandedLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ExpandedDark = Template.bind({});
ExpandedDark.args = { defaultCollapsed: false };
ExpandedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CollapsedLight = Template.bind({});
CollapsedLight.args = { defaultCollapsed: true };
CollapsedLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const CollapsedDark = Template.bind({});
CollapsedDark.args = { defaultCollapsed: true };
CollapsedDark.decorators = [ThemeDecorator(Theme.DARK)];
