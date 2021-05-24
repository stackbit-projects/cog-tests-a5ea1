import React from 'react';
import Spinner from './Spinner';

export default {
    title: 'Spinner',
    component: Spinner
};

const Template = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = { size: 24 };
