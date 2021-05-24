import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS } from '../../constants';
import Link from 'next/link';

const Wrapper = styled.div`
    position: relative;

    min-height: 100%;

    max-width: 1024px;
    padding: 16px;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const Main = styled.main`
    flex: 1;
    display: flex;
`;

const Title = styled.h1`
    a {
        font-size: ${28 / 16}rem;
        font-family: 'Lora';
        text-decoration: none;
        color: ${COLORS.grey[200]};
    }
`;

const Note = styled.p`
    color: ${COLORS.grey[400]};
    font-size: ${14 / 16}rem;
`;

const Layout = ({ children }) => {
    return (
        <Wrapper>
            <header>
                <Title>
                    <Link href="/">Cerebello</Link>
                </Title>
            </header>
            <Main>{children}</Main>
            <footer>
                <Note>© Koentges Lab 2021</Note>
            </footer>
        </Wrapper>
    );
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
