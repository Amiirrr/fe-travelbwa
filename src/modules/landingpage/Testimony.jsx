import React from 'react'

import img from '@/assets/img/foto_keluarga.png'
import Button from '@/components/Button'

const Testimony = () => {
    return (
        <section className='testimony container'>
            <figure>
                <img className='img-testimony' src={img} alt="img_testimony" />
            </figure>
            <div className='details'>
                <h4 className='title'>Happy Family</h4>
                <div className='rating'></div>
                <p className='message'>"What a great trip with my family and I should try again next time soon ..."</p>
                <p className='user'>Angga, Product Designer</p>
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