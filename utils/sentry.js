/**
 * Sentry Utilities
 * Authored by: Sentry
 * Extended by: Will Hall
 */

import * as Sentry from '@sentry/node';
import { RewriteFrames } from '@sentry/integrations';

/**
 * Init - Initialises Sentry for capturing errors and events.
 */
export const initSentry = () => {
    if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
        const integrations = [];
        if (
            process.env.NEXT_IS_SERVER === 'true' &&
            process.env.NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR
        ) {
            // For Node.js, rewrite Error.stack to use relative paths, so that source
            // maps starting with ~/_next map to files in Error.stack with path
            // app:///_next
            integrations.push(
                new RewriteFrames({
                    iteratee: (frame) => {
                        frame.filename = frame.filename.replace(
                            process.env.NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR,
                            'app:///'
                        );
                        frame.filename = frame.filename.replace('.next', '_next');
                        return frame;
                    }
                })
            );
        }

        Sentry.init({
            enabled: process.env.NODE_ENV === 'production',
            integrations,
            dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
            release: process.env.NEXT_PUBLIC_COMMIT_SHA
        });
    }
};

/**
 * withSentry - Wraps an express-style request handler function with Sentry exception handling.
 */
export const withSentry = (requestHandler) => {
    return async (req, res) => {
        try {
            return await requestHandler(req, res);
        } catch (err) {
            Sentry.captureException(err);
            await Sentry.flush(2000);
            throw err;
        }
    };
};
