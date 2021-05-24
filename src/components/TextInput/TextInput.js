import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS } from '../../constants';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

const FormLabel = styled.label`
    font-size: ${14 / 16}rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--input-color);
    margin-bottom: 8px;
`;

const Input = styled.input`
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    border: 2px solid var(--input-border-color);
    font-size: ${16 / 16}rem;
    color: var(--input-color);
    cursor: var(--input-cursor);

    &:hover {
        border-color: var(--input-border-color--hover);
    }

    &::placeholder {
        color: var(--input-placeholder-color);
    }
`;

const VARIANTS = {
    default: {
        '--input-color': COLORS.grey[200],
        '--input-placeholder-color': COLORS.grey[600],
        '--input-color--error': COLORS.bad.default,
        '--input-border-color': COLORS.grey[400],
        '--input-border-color--hover': COLORS.grey[200]
    },
    ghost: {
        '--input-color': COLORS.grey[600],
        '--input-placeholder-color': COLORS.grey[600],
        '--input-color--error': COLORS.grey[600],
        '--input-border-color': COLORS.grey[600],
        '--input-border-color--hover': COLORS.grey[600]
    }
};

const ACTIVE_STATES = {
    active: { '--input-cursor': 'pointer' },
    disabled: { '--input-cursor': 'not-allowed' }
};

const TextInput = ({ label, variant, disabled, ...props }) => {
    const variantStyles = VARIANTS[variant];
    if (!variantStyles) throw new Error(`No input variant found for variant: ${variant}`);

    const styles = { ...variantStyles, ...ACTIVE_STATES[disabled ? 'disabled' : 'inactive'] };

    return (
        <Wrapper style={styles}>
            <FormLabel htmlFor={props.name}>{label}</FormLabel>
            <Input {...props} disabled={disabled} />
        </Wrapper>
    );
};

TextInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string
};

TextInput.defaultProps = {
    variant: 'default'
};

export default TextInput;
