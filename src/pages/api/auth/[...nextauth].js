import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import FaunaAdapter from '../../../../auth/fauna-adapter';
import faunaClient from '../../../../db/fauna-client';
import { sendVerificationRequest } from './sendVerificationRequest';

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            scope: 'user:email'
        }),
        Providers.Email({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.EMAIL_FROM,
            sendVerificationRequest: sendVerificationRequest
        })
    ],
    adapter: FaunaAdapter.Adapter({ faunaClient }),
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60 // 30 days
    },
    jwt: {
        signingKey: process.env.NEXTAUTH_JWT_SIGNING_PRIVATE_KEY
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/auth/signin',
        verifyRequest: '/auth/verify-request',
        error: '/auth/error'
    },
    callbacks: {
        async jwt(token, user) {
            if (user?.id) token.id = user.id;
            if (user?.roles) token.roles = user.roles;
            return token;
        },
        async session(session, token) {
            if (token?.id) session.user.id = token.id;
            if (token?.roles) session.user.roles = token.roles;
            return session;
        },
        async redirect(url, baseUrl) {
            return url.startsWith(baseUrl) ? url : baseUrl;
        }
    }
});
