import styled from 'styled-components';
import PropTypes from 'prop-types';
import Spacer from '../Spacer';
import { COLORS, SHADOWS } from '../../constants';

const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    max-width: 384px;
    padding: 0;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Card = styled.div`
    color: ${COLORS.grey[200]};
    box-shadow: ${SHADOWS.large};
    border-radius: 16px;
    padding: 16px;
    text-align: center;
    background-color: ${COLORS.white};
    flex: 0;
`;

const Title = styled.h1`
    font-size: 35px;
    font-family: Lora, serif;
    font-weight: 400;
`;

const CenterCard = ({ title, children, ...delegated }) => {
    return (
        <Wrapper {...delegated}>
            <Card>
                <Title>{title}</Title>
                <Spacer size={8} />
                {children}
            </Card>
            <Spacer size={64} />
        </Wrapper>
    );
};

CenterCard.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};

export default CenterCard;
