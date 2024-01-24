import React from 'react'

const HeadingDetail = ({ data }) => {

    return (
        <section className='heading-detail cointainer'>
            <h1 className='title'>{data.name}</h1>
            <p className='location'>{data.city}, {data.country}</p>
        </section>
    )
}

export default HeadingDetail