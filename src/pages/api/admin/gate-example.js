import Gate from '../../../../auth/fauna-gate';
import client from '../../../../db/fauna-client';
import { getSession } from 'next-auth/client';
import { initSentry, withSentry } from '../../../../utils/sentry';

initSentry();

export default withSentry(async (req, res) => {
    const session = await getSession({ req });

    if (session) {
        const gate = await Gate(session.user.id, client);

        if (gate.all(['user', 'dude', 'admin'])) {
            // Signed in and correct roles
            res.status(200).json(session);
        } else {
            // Signed in but with missing roles
            res.status(403).json({
                message: 'forbidden',
                missing: gate.missing(['user', 'dude', 'admin'])
            });
        }
    } else {
        // Not Signed in
        res.status(401).json({ message: 'unauthorized' });
    }
    res.end();
});
