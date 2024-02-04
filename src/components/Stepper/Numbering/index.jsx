import React from 'react'

import PropTypes from 'prop-types'

const Numbering = ({ style, className, data, current }) => {

    console.log(data)

    const KeysOfData = Object.keys(data);

    return (
        <div className={["numbering", className].join(" ")}>
            <ol style={style}>
                {
                    KeysOfData.map((list, index) => {
                        let isActive = list === current ? "active" : "";
                        if (index + 1 === KeysOfData.length) {
                            isActive = "";
                            return null
                        }

                        return (
                            <li key={index} className={[isActive].join(" ")}>
                                {index + 1}
                            </li>
                        )
                    })
                }
            </ol >
        </div>
    )
}

export default Numbering

Numbering.propTypes = {
    className: PropTypes.string,
    data: PropTypes.object,
    current: PropTypes.string
}