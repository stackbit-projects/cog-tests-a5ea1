import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * From SpinKit: Circle Fade
 * https://github.com/tobiasahlin/SpinKit
 * Author: @tobiasahlin
 */

const Wrapper = styled.div`
    margin: auto;
    width: var(--spinner-size);
    height: var(--spinner-size);
    position: relative;

    @-webkit-keyframes sk-circleFadeDelay {
        0%,
        39%,
        100% {
            opacity: 0;
        }
        40% {
            opacity: 1;
        }
    }

    @keyframes sk-circleFadeDelay {
        0%,
        39%,
        100% {
            opacity: 0;
        }
        40% {
            opacity: 1;
        }
    }
`;

const Blip = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    will-change: transform;

    -webkit-transform: rotate(var(--blip-rotation));
    -ms-transform: rotate(var(--blip-rotation));
    transform: rotate(var(--blip-rotation));

    &::before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 10%;
        height: 25%;
        background-color: currentColor;
        border-radius: ${8 / 16}rem;

        -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
        animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
        -webkit-animation-delay: var(--blip-animation-delay);
        animation-delay: var(--blip-animation-delay);
    }
`;

const Spinner = ({ size, ...delegated }) => {
    return (
        <Wrapper {...delegated} style={{ '--spinner-size': size + 'px' }}>
            <Blip style={{ '--blip-rotation': '30deg', '--blip-animation-delay': '-1.1s' }} />
            <Blip style={{ '--blip-rotation': '60deg', '--blip-animation-delay': '-1s' }} />
            <Blip style={{ '--blip-rotation': '90deg', '--blip-animation-delay': '-0.9s' }} />
            <Blip style={{ '--blip-rotation': '120deg', '--blip-animation-delay': '-0.8s' }} />
            <Blip style={{ '--blip-rotation': '150deg', '--blip-animation-delay': '-0.7s' }} />
            <Blip style={{ '--blip-rotation': '180deg', '--blip-animation-delay': '-0.6s' }} />
            <Blip style={{ '--blip-rotation': '210deg', '--blip-animation-delay': '-0.5s' }} />
            <Blip style={{ '--blip-rotation': '240deg', '--blip-animation-delay': '-0.4s' }} />
            <Blip style={{ '--blip-rotation': '270deg', '--blip-animation-delay': '-0.3s' }} />
            <Blip style={{ '--blip-rotation': '300deg', '--blip-animation-delay': '-0.2s' }} />
            <Blip style={{ '--blip-rotation': '330deg', '--blip-animation-delay': '-0.1s' }} />
            <Blip style={{ '--blip-rotation': '0deg', '--blip-animation-delay': '0s' }} />
        </Wrapper>
    );
};

Spinner.propTypes = {
    size: PropTypes.number
};

export default Spinner;
