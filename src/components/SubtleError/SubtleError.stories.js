import React from 'react';
import SubtleError from './SubtleError';

export default {
    title: 'SubtleError',
    component: SubtleError
};

const Template = (args) => <SubtleError {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'This is a subtle error' };
