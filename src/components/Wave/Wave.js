import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS } from '../../constants';

const SVG = styled.svg`
    display: block;
    will-change: transform;
    transform: var(--svg-transform-rotate);
`;

const VARIANTS = {
    default: { '--svg-transform-rotate': 'rotate(0deg)' },
    flip: { '--svg-transform-rotate': 'rotate(180deg)' }
};

const Wave = ({ variant }) => {
    const styles = VARIANTS[variant];

    return (
        <SVG width="100%" viewBox="0 90 800 310" version="1.1" style={styles}>
            <defs>
                <linearGradient id="linear" gradientTransform="rotate(90)">
                    <stop offset="50%" stopColor={COLORS.secondary.transparent} />
                    <stop offset="95%" stopColor={COLORS.primary.transparent} />
                </linearGradient>
            </defs>
            <g>
                <path
                    d="
                    M 0 250 
                    C 400 300 400 50 800 100 
                    L 800 400
                    L 0 400
                    Z
                    "
                    style={{
                        fill: 'url(#linear)',
                        stroke: 'none'
                    }}
                />
            </g>
        </SVG>
    );
};

Wave.propTypes = {
    variant: PropTypes.string
};

Wave.defaultProps = {
    variant: 'default'
};

export default Wave;
