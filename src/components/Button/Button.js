import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS } from '../../constants';
import Spinner from '../Spinner';

const wrapperStyles = `
    position: relative;
    display: inline-block;
    width: var(--button-width);

    margin: 0;
    padding: 8px ${16 + 2}px;
    border: none;
    border-radius: 8px;

    color: var(--button-color);
    text-decoration: none;

    cursor: var(--button-cursor);

    background-color: var(--button-background-color);

    &:hover {
        background-color: var(--button-background-color--hover);
    }
`;

const LinkWrapper = styled.a([wrapperStyles]);
const ButtonWrapper = styled.button([wrapperStyles]);

const ChildrenWrapper = styled.div`
    opacity: var(--children-opacity);
    display: inline-block;
    width: 100%;

    font-size: ${16 / 16}rem;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;

    user-select: none;
`;

const SpinnerWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -12px;
    margin-left: -12px;
`;

const VARIANTS = {
    default: {
        '--button-color': COLORS.white,
        '--button-background-color': COLORS.primary.lighter,
        '--button-background-color--hover': COLORS.primary.darker
    },
    danger: {
        '--button-color': COLORS.white,
        '--button-background-color': COLORS.bad.lighter,
        '--button-background-color--hover': COLORS.bad.darker
    },
    confirm: {
        '--button-color': COLORS.grey[200],
        '--button-background-color': COLORS.good.lighter,
        '--button-background-color--hover': COLORS.good.darker
    },
    ghost: {
        '--button-color': COLORS.grey[200],
        '--button-background-color': COLORS.grey[800],
        '--button-background-color--hover': COLORS.grey[800]
    }
};

const LOADING_STATES = {
    loading: {
        '--children-opacity': 0,
        '--button-cursor': 'wait'
    },
    ready: {
        '--children-opacity': 1,
        '--button-cursor': 'pointer'
    }
};

const ACTIVE_STATES = {
    active: {},
    disabled: { '--button-cursor': 'not-allowed' }
};

const WIDTHS = {
    fullWidth: {
        '--button-width': '100%'
    },
    content: {
        '--button-width': 'fit-content'
    }
};

const Button = ({ component, variant, disabled, loading, fullWidth, children, ...delegated }) => {
    const variantStyles = VARIANTS[variant];
    if (!variantStyles) throw new Error(`No button variant found for variant: ${variant}`);

    const styles = {
        ...variantStyles,
        ...LOADING_STATES[loading ? 'loading' : 'ready'],
        ...ACTIVE_STATES[disabled ? 'disabled' : 'active'],
        ...WIDTHS[fullWidth ? 'fullWidth' : 'content']
    };

    if (!['a', 'button'].includes(component))
        throw new Error(`Invalid component provided to button: ${component}`);

    const Wrapper = component === 'a' ? LinkWrapper : ButtonWrapper;

    return (
        <Wrapper {...delegated} style={styles} disabled={disabled}>
            <ChildrenWrapper>{children}</ChildrenWrapper>
            {loading && (
                <SpinnerWrapper>
                    <Spinner size={24} />
                </SpinnerWrapper>
            )}
        </Wrapper>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    component: PropTypes.string,
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    fullWidth: PropTypes.bool,
    children: PropTypes.node
};

Button.defaultProps = {
    variant: 'default',
    component: 'button'
};

export default Button;
