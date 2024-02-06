import React, { useState } from 'react'
import PropTypes from 'prop-types'

const InputText = (props) => {
    const {
        value,
        type = "text",
        placeholder = "Please type here...",
        name,
        prepend,
        append,
        outerClassName,
        inputClassName,
        errorResponse = "Please match the requested format.",
        onChange: parentOnChange
    } = props;

    // console.log(props)

    const [HasError, setHasError] = useState(null);
    let pattern = "";
    if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (type === "tel") pattern = "[0-9]*";

    const onChange = (event) => {
        const target = {
            target: {
                name: name,
                value: event.target.value,
            },
        };

        if (type === "email") {
            if (!pattern.test(event.target.value)) setHasError(errorResponse);
            else setHasError(null);
        }
        if (type === "tel") {
            if (event.target.validity.valid) parentOnChange(target);
        } else {
            parentOnChange(target);
        }
    };

    return (
        <div className='input-text'>
            <input
                id={name}
                name={name}
                type={type}
                pattern={pattern}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                autoComplete='off'
            />
        </div>
    )
}

export default InputText

InputText.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onChange: PropTypes.func.isRequired,
    prepend: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    append: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    type: PropTypes.string,
    placeholder: PropTypes.string,
    outerClassName: PropTypes.string,
    inputClassName: PropTypes.string,
};