import Spacer from '../../components/Spacer';

import Link from 'next/link';
import Button from '../../components/Button';

import { useRouter } from 'next/router';
import CenterCard from '../../components/CenterCard';
import FixedBGWave from '../../components/FixedBGWave';
import Layout from '../../components/Layout';

const authErrors = {
    configuration: {
        title: 'Server Error',
        message: (
            <>
                <p>There was a problem with our sign in service.</p>
                <p>We&apos;re working to get things sorted soon.</p>
            </>
        )
    },
    accessdenied: {
        title: 'Access Denied',
        message: (
            <>
                <p>You are not allowed to access this site.</p>
                <p>If you think this is incorrect, please get in touch.</p>
            </>
        )
    },
    verification: {
        title: 'Expired',
        message: (
            <>
                <p>This sign in link has expired.</p>
                <p>You may have already used it.</p>
            </>
        ),
        action: (
            <Link href="/auth/signin" passHref>
                <Button component="a" fullWidth>
                    Try Again
                </Button>
            </Link>
        )
    },
    default: {
        title: 'Error',
        message: (
            <>
                <p>There was a problem during sign in.</p>
                <p>Please try again later.</p>
            </>
        ),
        action: (
            <Link href="/" passHref>
                <Button component="a" fullWidth>
                    Go Home
                </Button>
            </Link>
        )
    }
};

export default function SignIn() {
    const router = useRouter();
    const queryError = router.query?.error?.toLowerCase();
    const { title, message, action } = authErrors[queryError] ?? authErrors['default'];
    return (
        <>
            <FixedBGWave />
            <Layout>
                {queryError && (
                    <CenterCard title={title}>
                        {message}
                        {action && (
                            <>
                                <Spacer size={24} />
                                {action}
                            </>
                        )}
                    </CenterCard>
                )}
            </Layout>
        </>
    );
}
