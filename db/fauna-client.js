import faunadb from 'faunadb';

const faunaClient = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET_KEY,
    domain: process.env.FAUNADB_URL,
    scheme: process.env.FAUNADB_SCHEME,
    port: process.env.FAUNADB_PORT
});

export default faunaClient;
