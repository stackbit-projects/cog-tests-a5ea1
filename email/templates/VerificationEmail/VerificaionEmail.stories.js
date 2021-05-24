import React from 'react';
import VerificationEmailReact from './VerificationEmail.react';

export default {
    title: 'Emails/Verification Email',
    component: VerificationEmailReact
};

const Template = (args) => <VerificationEmailReact {...args} />;

export const Default = Template.bind({});
Default.args = {
    email: 'dude@cool.org',
    url:
        'http://localhost:3000/api/auth/callback/email?email=will%40willhall.uk&token=3cc78ba88d9013db1b5d043013a1bc9f7b63dd349fc50d4632561e1f140e748d'
};
