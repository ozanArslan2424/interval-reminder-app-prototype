import PropTypes from 'prop-types';

const Input = ({ label, type, id, placeholder }) => {
    return (
        <div>
            <div>
                <label htmlFor={id}>
                    {label}
                </label>
            </div>
            <input
                id={id}
                type={type}
                className= {("segment" + " " + type + "input")}
                placeholder={placeholder}
            />
        </div>
    )
}


Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
}

export default Input