import PropTypes from 'prop-types';
import BaseEmail from '../BaseEmail';
import { escapeEmail } from '../../utils';

const TextInput = ({ email, url }) => {
    return (
        <BaseEmail>
            <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                <tr>
                    <td align="center" style={{ fontSize: '24px' }}>
                        Sign in as <strong>{escapeEmail(email)}</strong>
                    </td>
                </tr>
                <tr>
                    <td align="center" style={{ padding: '28px' }}>
                        <table border="0" cellSpacing="0" cellPadding="0">
                            <tr>
                                <td align="center">
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            color: '#ffffff',
                                            fontSize: '18px',
                                            textDecoration: 'none',
                                            textTransform: 'uppercase',
                                            letterSpacing: '2px',
                                            backgroundColor: '#775CF0',
                                            borderRadius: '4px',
                                            paddingTop: '10px',
                                            paddingBottom: '10px',
                                            paddingLeft: '16px',
                                            paddingRight: '16px'
                                        }}>
                                        Sign in
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr height="4">
                    <td align="center" height="4">
                        {' '}
                    </td>
                </tr>
                <tr>
                    <td
                        align="center"
                        style={{
                            fontSize: '16px'
                        }}>
                        If you did not request this email you can safely ignore it.
                    </td>
                </tr>
                <tr height="16">
                    <td align="center" height="16">
                        {' '}
                    </td>
                </tr>
                <tr>
                    <td
                        align="center"
                        style={{
                            fontSize: '12px'
                        }}>
                        If the sign in button doesn&apos;t work, try this link:
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <table width="250" border="0" cellSpacing="0" cellPadding="0">
                            <tr>
                                <td
                                    align="center"
                                    style={{
                                        fontSize: '12px',
                                        wordBreak: 'break-all'
                                    }}>
                                    <a href={url} target="_blank" rel="noreferrer">
                                        {url}
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </BaseEmail>
    );
};

TextInput.propTypes = {
    email: PropTypes.string,
    url: PropTypes.string
};

TextInput.defaultProps = {};

export default TextInput;
