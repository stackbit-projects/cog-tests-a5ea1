import styled from 'styled-components';
import { signIn, signOut, useSession } from 'next-auth/client';
import Button from '../components/Button';
import CenterCard from '../components/CenterCard';
import FixedBGWave from '../components/FixedBGWave';
import Layout from '../components/Layout';
import Spacer from '../components/Spacer';
import Spinner from '../components/Spinner';
import Link from 'next/link';

const Area = styled.div`
    position: relative;
    padding: 16px;
    border: 2px dashed black;
    border-radius: 8px;
`;

const Label = styled.p`
    position: absolute;
    top: -12px;
    background: white;
    padding-left: 8px;
    margin-left: -4px;
    padding-right: 8px;
    font-weight: bold;
`;

/**
 * Ayo this do be an app.
 */
const App = () => {
    const [session, loading] = useSession();
    return (
        <>
            <FixedBGWave />
            <Layout>
                <CenterCard title="Demo Panel">
                    <Area>
                        <Label>Authentication</Label>
                        {!session && !loading && (
                            <ul>
                                <li>Not signed in</li>
                                <li>
                                    <Button
                                        onClick={() => signIn()}
                                        variant={'default'}
                                        fullWidth={true}>
                                        Sign In
                                    </Button>
                                </li>
                            </ul>
                        )}
                        {session && (
                            <ul>
                                <li>Signed in as {session.user.id}</li>
                                <li>Roles: {session.user.roles}</li>
                                <li>
                                    <Link href="/api/admin/gate-example">Visit here</Link> to see if
                                    you are a super secret admin.
                                </li>
                                <li>
                                    <Button
                                        onClick={() => signOut()}
                                        variant={'default'}
                                        fullWidth={true}>
                                        Sign Out
                                    </Button>
                                </li>
                            </ul>
                        )}

                        {loading && (
                            <ul>
                                <Spinner size={24} />
                            </ul>
                        )}
                    </Area>
                    <Spacer size={16} />
                    <Area>
                        <Label>Sentry</Label>
                        <ul>
                            <li>
                                <Link href="/api/admin/sentry-example">Visit Here</Link> to send an
                                API request test error to Sentry.
                            </li>
                            <li>Click to trigger a client-side error:</li>
                            <li>
                                <Button
                                    onClick={() => {
                                        throw new Error(
                                            'A Client-side Error that Sentry will see.'
                                        );
                                    }}
                                    variant={'danger'}
                                    fullWidth={true}>
                                    Trigger
                                </Button>
                            </li>
                        </ul>
                    </Area>
                    <Spacer size={16} />
                    <Area>
                        <Label>Storybook</Label>
                        <a href="https://willthevideoman.github.io/cog-tests-boilerplate/">
                            Visit Here
                        </a>{' '}
                        to see the Storybook Docs.
                    </Area>
                    <Spacer size={16} />
                    <Area>
                        <Label>Deployment Pipeline</Label>
                        <ul>
                            <li>Linting from ESLint</li>
                            <li>Formatting from Prettier</li>
                            <li>Testing from Jest</li>
                            <li> Hosting from Vercel</li>
                            <li>Data from FaunaDB</li>
                        </ul>
                    </Area>
                </CenterCard>
            </Layout>
        </>
    );
};

export default App;
