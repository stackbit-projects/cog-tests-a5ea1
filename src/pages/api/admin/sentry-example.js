import { initSentry, withSentry } from '../../../../utils/sentry';

initSentry();

export default withSentry(async () => {
    throw new Error('An Error that Sentry will record.');
});
