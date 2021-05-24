import { initSentry, withSentry } from '../../../../utils/sentry';
import sendReactEmail from '../../../../email/send-react-email';
import verificationEmail from '../../../../email/templates/VerificationEmail';

initSentry();

export default withSentry(async (req, res) => {
    const { EmailElement, emailText } = verificationEmail({
        email: 'dude@org.cool',
        url: 'https://example.com'
    });

    const server = {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD
        }
    };

    try {
        await sendReactEmail(
            EmailElement,
            emailText,
            server,
            'will@willhall.uk',
            'willthevideoman@gmail.com',
            'Test Sign In'
        );
        res.status(200);
    } catch (e) {
        console.error(e);
        res.status(500);
    }

    res.end();
});
