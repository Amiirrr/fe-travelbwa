import React from 'react'

const Meta = ({ data, current }) => {
    return (
        <div className='meta'>
            <h1 className='title'>{data[current] && data[current].title}</h1>
            <p className='desc'>{data[current] && data[current].description}</p>
        </div>
    )
}

export default Meta