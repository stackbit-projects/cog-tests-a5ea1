import { COLORS } from '../../constants';
import Wave from '../Wave';
import styled from 'styled-components';

const FixedWrapper = styled.div`
    position: fixed;
    width: 100%;
    top: 15%;
`;

const GradientBlock = styled.div`
    background-image: linear-gradient(
        ${COLORS.primary.transparent},
        ${COLORS.secondary.transparent}
    );
    height: 100vh;
    margin-top: -1px;
`;

const FixedBGWave = () => {
    return (
        <FixedWrapper>
            <Wave />
            <GradientBlock />
        </FixedWrapper>
    );
};

export default FixedBGWave;
