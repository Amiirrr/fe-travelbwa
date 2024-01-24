import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';

const Number = (props) => {

    const { value, placeholder, name, min = 1, max = 30, prefix = "", suffix = "", onChange } = props
    const [inputValue, setInputValue] = useState(`${prefix} ${value} ${value > 1 ? suffix + "s" : suffix}`)

    // const handleChange = e => {
    //     console.log("kerender");
    //     let value = String(e.target.value);
    //     if (prefix) value = value.replace(prefix);
    //     if (suffix) value = value.replace(suffix);

    //     const patternNumeric = new RegExp("[0-9]*");
    //     const isNumeric = patternNumeric.test(value);

    //     if (isNumeric && +value <= max && +value >= min) {
    //         props.onChange({
    //             target: {
    //                 name: name,
    //                 value: +value
    //             }
    //         });
    //         setInputValue(`${prefix} ${value} ${value > 1 ? suffix + "s" : suffix}`)
    //     }
    // }

    const minus = () => {
        value > min &&
            onChange({
                target: {
                    name: name,
                    value: +value - 1
                }
            })
    }

    const plus = () => {
        value < max &&
            onChange({
                target: {
                    name: name,
                    value: +value + 1
                }
            })
    }

    return (
        <div className={["input-number", props.outerClassName].join(" ")}>
            <div className='btn-wrapper'>
                <span className='input-group-text minus' onClick={minus}>-</span>
            </div>
            <input
                readOnly
                max={max}
                min={min}
                pattern='[0-9*]'
                className='form-input'
                placeholder={placeholder ? placeholder : '0'}
                value={`${prefix} ${value} ${value > 1 ? suffix + "s" : suffix}`}
            // onChange={handleChange}
            />
            <div className='btn-wrapper'>
                <span className='input-group-text plus' onClick={plus}>+</span>
            </div>
        </div>
    )
}

export default Number

Number.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    outerClassName: PropTypes.string,
}

