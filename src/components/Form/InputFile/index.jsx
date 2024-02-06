import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

const InputFile = (props) => {
    const {
        placeholder = "Browse a file...",
        name,
        accept,
        prepend,
        append,
        outerClassName,
        inputClassName,
        onChange: parentOnChange
    } = props;

    const [FileName, setFileName] = useState("");

    const refInputFile = useRef(null);

    const onChange = (event) => {
        const selectedFile = event.target.files[0];
        setFileName(selectedFile.name);
        parentOnChange({
            target: {
                name: event.target.name,
                value: event.target.files,
            },
        });
    };

    console.log(FileName)

    return (
        <div className='input-file'>
            <input
                accept={accept}
                ref={refInputFile}
                name={name}
                type="file"
                onChange={onChange}
            />
            <input
                onClick={() => refInputFile.current.click()}
                defaultValue={FileName}
                placeholder={placeholder}
                readOnly
            />
        </div>
    )
}

export default InputFile

InputFile.PropTypes = {
    name: PropTypes.string.isRequired,
    accept: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    prepend: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    append: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    placeholder: PropTypes.string,
    outerClassName: PropTypes.string,
    inputClassName: PropTypes.string,
};