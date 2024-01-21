import React from 'react'

import iTraveler from '@/assets/img/icon/ic_traveler.svg';
import iCities from '@/assets/img/icon/ic_cities.svg';
import iTreasure from '@/assets/img/icon/ic_treasure.svg';
import imgBanner from '@/assets/img/banner.png'

import Button from '@/components/Button';

const Hero = ({ data }) => {
    console.log(data)
    return (
        <section className='hero container'>
            <div className='content'>
                <h1 className='title'>Forget Busy Work,<br /> Start Next Vacation</h1>
                <p className='description'>We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>
                <Button
                    type='button'
                    isPrimary
                    hasShadow
                >
                    Show Me Now
                </Button>
                <div className="info">
                    <div className="item">
                        <img src={iTraveler} alt="iTraveler" />
                        <p><span>{data.travelers}</span> travelers</p>
                    </div>
                    <div className="item">
                        <img src={iTreasure} alt="iTreasure" />
                        <p><span>{data.treasures}</span> treasure</p>
                    </div>
                    <div className="item">
                        <img src={iCities} alt="iCities" />
                        <p><span>{data.cities}</span> cities</p>
                    </div>
                </div>
            </div>
            <div className='banner'>
                <img src={imgBanner} alt="imgBanner" />
            </div>
        </section>
    )
}

export default Hero