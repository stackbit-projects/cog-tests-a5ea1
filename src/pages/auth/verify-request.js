import Link from 'next/link';
import CenterCard from '../../components/CenterCard';
import FixedBGWave from '../../components/FixedBGWave';
import Layout from '../../components/Layout';

export default function SignIn() {
    return (
        <>
            <FixedBGWave />
            <Layout>
                <CenterCard title="Sent!">
                    <p>We’ve sent a sign-in link to your inbox. </p>
                    <p>
                        If it hasn’t arrived in the next few seconds, check your spam folder or{' '}
                        <Link href="/auth/signin">try again</Link>.
                    </p>
                </CenterCard>
            </Layout>
        </>
    );
}
