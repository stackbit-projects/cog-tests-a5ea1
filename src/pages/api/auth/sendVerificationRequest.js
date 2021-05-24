import sendReactEmail from '../../../../email/send-react-email';
import verificationEmail from '../../../../email/templates/VerificationEmail';

export const sendVerificationRequest = ({ identifier: email, url, baseUrl, provider }) => {
    return new Promise((resolve, reject) => {
        const { EmailElement, emailText } = verificationEmail({ email, url });
        const { server, from } = provider;

        const site = baseUrl.replace(/^https?:\/\//, '');

        sendReactEmail(EmailElement, emailText, server, email, from, `Sign In to ${site}`)
            .then(() => resolve())
            .catch((e) => reject(e));
    });
};
