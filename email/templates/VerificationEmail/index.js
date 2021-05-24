import VerificationEmailReact from './VerificationEmail.react';
import verificationEmailText from './verificationEmail.text';

const verificationEmail = ({ email, url }) => ({
    EmailElement: VerificationEmailReact({ email, url }),
    emailText: verificationEmailText({ email, url })
});

export default verificationEmail;
