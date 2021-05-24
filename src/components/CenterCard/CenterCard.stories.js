import React from 'react';
import CenterCard from './CenterCard';

export default {
    title: 'CenterCard',
    component: CenterCard
};

const Template = (args) => <CenterCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Center Card',
    children: 'This is a card that will remain in the center of a full width and height parent'
};
