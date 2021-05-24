import React from 'react';
import Layout from './Layout';
import CenterCard from '../CenterCard';

export default {
    title: 'Layout',
    component: Layout
};

const Template = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Body of the App!' };

export const WithCenterCard = Template.bind({});
WithCenterCard.args = { children: <CenterCard title="title">Body of card</CenterCard> };
