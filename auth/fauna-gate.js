import { query as q } from 'faunadb';

/**
 * Gate - returns a promised object containing methods to determine
 * if a given user is authorised against a give role(s)
 *
 * The gate fetches a copy of the user from a server-side store, rather than
 * relying on a session object directly. Since it is not easy to invalidate JWTs,
 * the local session's associated roles could become stale. Checking with the
 * server-side store every time, whilst introducing a read operations,
 * more robustly enforces permissions as it relies a single source of truth.
 *
 * @param {string} userId - the ID of the user to gate against.
 * @param {object} faunaClient - an instance of a Fauna DB client.
 * @returns {Promise}
 */
const Gate = async (userId, faunaClient) => {
    try {
        /**
         * Retrieve the user and their given roles from the server-side store.
         * If no user is returned, set an empty roles array to ensure all
         * gate methods return false, denying authorisation for any gated action.
         */
        const FQL = q.Get(q.Ref(q.Collection('users'), userId));
        const { data: user } = (await faunaClient.query(FQL)) || { data: { roles: [] } };

        /**
         * Determines if a user is assigned a given role.
         * @param {string} role - the roles to check against.
         * @returns {boolean}
         */
        const allows = (role) => user.roles.includes(role);

        /**
         * Determines if a user is assigned all given roles.
         * @param {[string]} roles - the roles to check against.
         * @returns {boolean}
         */
        const all = (roles) =>
            roles
                .map((role) => user.roles.includes(role))
                .reduce((allIncludes, includes) => (includes ? allIncludes : false), true);

        /**
         * Determines if a user is assigned at least one of the given roles.
         * @param {[string]} roles - the roles to check against.
         * @returns {boolean}
         */
        const any = (roles) =>
            roles
                .map((role) => user.roles.includes(role))
                .reduce((allIncludes, includes) => (includes ? true : allIncludes), false);

        /**
         * Determines which given roles are missing from the user's roles.
         * @param {[string]} roles - the roles to check against.
         * @returns {[string]}
         */
        const missing = (roles) => roles.filter((role) => !user.roles.includes(role));

        return { allows, all, any, missing };
    } catch (error) {
        return Promise.reject(error);
    }
};

export default Gate;
