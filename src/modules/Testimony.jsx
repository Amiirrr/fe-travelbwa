import React from 'react'

import img from '@/assets/img/foto_keluarga.png'
import Button from '@/components/Button'
import Rating from '@/utils/Rating'

const Testimony = ({ data }) => {
    return (
        <section className='testimony container'>
            <figure>
                <img className='img-testimony' src={img} alt="img_testimony" />
            </figure>
            <div className='details'>
                <h4 className='title'>{data.name}</h4>
                <Rating rate={data.rate} />
                <p className='message'>"{data.content}"</p>
                <p className='user'>{data.familyName}, {data.familyOccupation}</p>
                <Button
                    type="button"
                    isPrimary
                    hasShadow
                >
                    Read Their Story
                </Button>
            </div>
        </section>
    )
}

export default Testimony