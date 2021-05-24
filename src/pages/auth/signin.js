import { getCsrfToken, signIn } from 'next-auth/client';
import FormikTextInput from '../../components/FormikTextInput';
import Spacer from '../../components/Spacer';
import Button from '../../components/Button';
import SubtleError from '../../components/SubtleError';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import CenterCard from '../../components/CenterCard';
import FixedBGWave from '../../components/FixedBGWave';
import Layout from '../../components/Layout';

const signInErrors = {
    oauthsignin: 'Unable to sign in with external provider.',
    oauthcallback: 'Unable to communicate with external provider.',
    oauthcreateaccount: 'Unable to create an account with this external provider.',
    emailcreateaccount: 'Unable to create an account with this email.',
    callback: 'Unable to communicate with external provider.',
    oauthaccountnotlinked: 'Unable to link external provider with existing account.',
    emailsignin: 'Unable to sign in with email.',
    credentialssignin: 'Unable to sign in with username and password.',
    default: 'Unable to sign in.'
};

export default function SignIn({ csrfToken }) {
    const [remoteError, setRemoteError] = useState(false);
    const [remoteSucess, setRemoteSucess] = useState(false);
    const router = useRouter();

    return (
        <>
            <FixedBGWave />
            <Layout>
                <CenterCard title="Sign In">
                    <Formik
                        initialValues={{
                            email: '',
                            csrfToken: ''
                        }}
                        validationSchema={Yup.object({
                            email: Yup.string().email('Invalid email address').required('Required')
                        })}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {
                            setRemoteError(false);
                            setRemoteSucess(false);
                            try {
                                await signIn('email', {
                                    email: values.email,
                                    callbackUrl: '/'
                                });
                                setRemoteSucess(true);
                            } catch (e) {
                                setRemoteError(true);
                                resetForm(true);
                                setSubmitting(false);
                                throw new Error('Unable to Sign In on the Client Side.');
                            }
                        }}>
                        {(formik) => (
                            <Form>
                                <FormikTextInput
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="joe@smith.com"
                                    disabled={formik.isSubmitting}
                                />
                                <Spacer size={16} />
                                <Button
                                    type="submit"
                                    loading={formik.isSubmitting || remoteSucess}
                                    disabled={formik.isSubmitting}
                                    fullWidth>
                                    Send me a Link
                                </Button>

                                {router.query.error ? (
                                    <SubtleError>{signInErrors[router.query.error]}</SubtleError>
                                ) : (
                                    remoteError && (
                                        <SubtleError>
                                            There was a problem with our sign in service.
                                        </SubtleError>
                                    )
                                )}

                                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                            </Form>
                        )}
                    </Formik>
                </CenterCard>
            </Layout>
        </>
    );
}

SignIn.propTypes = {
    csrfToken: PropTypes.string
};

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
    const csrfToken = await getCsrfToken(context);
    return {
        props: { csrfToken }
    };
}
