import React from 'react';
import TextInput from './TextInput';

export default {
    title: 'TextInput',
    component: TextInput,
    argTypes: {
        variant: {
            control: { type: 'select', options: ['default', 'ghost'] }
        }
    }
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Email Address',
    value: '',
    variant: 'default',
    disabled: false,
    name: 'email',
    type: 'email',
    placeholder: 'joe@smith.com'
};

export const Inactive = Template.bind({});
Inactive.args = {
    label: 'Email Address',
    value: '',
    variant: 'ghost',
    disabled: true,
    name: 'email',
    type: 'email',
    placeholder: 'joe@smith.com'
};
