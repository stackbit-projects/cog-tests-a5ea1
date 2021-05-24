import React from 'react';
import Wave from './Wave';

export default {
    title: 'Wave',
    component: Wave
};

const Template = (args) => <Wave {...args} />;

export const Default = Template.bind({});
Default.args = { variant: 'default' };

export const Flip = Template.bind({});
Flip.args = { variant: 'flip' };
