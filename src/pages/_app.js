import PropTypes from 'prop-types';
import GlobalStyle from '../components/GlobalStyle';
import { Provider } from 'next-auth/client';
import { initSentry } from '../../utils/sentry';

initSentry();

const App = ({ Component, pageProps, err }) => (
    <Provider session={pageProps.session}>
        <GlobalStyle />
        <Component {...pageProps} err={err} />
    </Provider>
);

App.propTypes = {
    pageProps: PropTypes.shape({
        session: PropTypes.shape({})
    }),
    Component: PropTypes.elementType,
    err: PropTypes.object
};

export default App;
