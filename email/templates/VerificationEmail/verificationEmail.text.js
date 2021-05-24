import { escapeEmail } from '../../utils';

const verificationEmailText = ({ email, url }) =>
    `Sign in to Cerebello\n${escapeEmail(email)}\n${url}\n\n`;

export default verificationEmailText;
