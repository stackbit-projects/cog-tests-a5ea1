import React from 'react';
import BaseEmail from './BaseEmail';

export default {
    title: 'Emails/Base Email',
    component: BaseEmail
};

const Template = (args) => <BaseEmail {...args} />;

export const Default = Template.bind({});
Default.args = {
    email: 'dude@cool.org',
    url: 'https://auth.site.com'
};
