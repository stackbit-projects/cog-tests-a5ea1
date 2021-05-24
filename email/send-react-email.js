import ReactDOMServer from 'react-dom/server';
import nodemailer from 'nodemailer';

const sendReactEmail = (reactElement, text, server, to, from, subject) => {
    return new Promise((resolve, reject) => {
        nodemailer.createTransport(server).sendMail(
            {
                to,
                from,
                subject,
                text,
                html: ReactDOMServer.renderToStaticMarkup(reactElement)
            },
            (error) => {
                if (error) {
                    reject(new Error('SEND_VERIFICATION_EMAIL_ERROR', error));
                }
                resolve();
            }
        );
    });
};

export default sendReactEmail;
