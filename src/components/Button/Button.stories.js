import React from 'react';
import Button from './Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        onClick: { action: 'handle click' },
        variant: {
            control: { type: 'select', options: ['default', 'danger', 'confirm', 'ghost'] }
        },
        component: {
            control: { type: 'select', options: ['a', 'button'] }
        }
    }
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default',
    component: 'button',
    variant: 'default',
    disabled: false,
    loading: false,
    fullWidth: false
};

export const Confirm = Template.bind({});
Confirm.args = {
    children: 'Confirm',
    component: 'button',
    variant: 'confirm',
    disabled: false,
    loading: false,
    fullWidth: false
};

export const Danger = Template.bind({});
Danger.args = {
    children: 'Danger',
    component: 'button',
    variant: 'danger',
    disabled: false,
    loading: false,
    fullWidth: false
};

export const Inactive = Template.bind({});
Inactive.args = {
    children: 'Inactive',
    component: 'button',
    variant: 'ghost',
    disabled: true,
    loading: false,
    fullWidth: false
};

export const Loading = Template.bind({});
Loading.args = {
    children: 'Loading',
    component: 'button',
    variant: 'default',
    disabled: false,
    loading: true,
    fullWidth: false
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    children: 'Full Width',
    component: 'button',
    variant: 'default',
    disabled: false,
    loading: false,
    fullWidth: true
};

export const AsLink = Template.bind({});
AsLink.args = {
    href: '/',
    children: 'This is a Link',
    component: 'a',
    variant: 'default',
    disabled: false,
    loading: false,
    fullWidth: false
};
