import PropTypes from 'prop-types';
import { useField } from 'formik';
import TextInput from '../TextInput';
import SubtleError from '../SubtleError';

const FormikTextInput = ({ ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <TextInput {...field} {...props} />
            {meta.touched && meta.error && <SubtleError>{meta.error}</SubtleError>}
        </>
    );
};

FormikTextInput.propTypes = {
    label: PropTypes.string,
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string
};

FormikTextInput.defaultProps = {
    variant: 'default'
};

export default FormikTextInput;
