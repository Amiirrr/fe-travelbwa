import React from 'react'

import img1 from '@/assets/img/mostpicked-1.png'

const MostPicked = ({ data }) => {

    function Card({ isBig, price, unit, city, country, name }) {

        return (
            <div className={`card ${isBig ? 'card-big' : ''}`}>
                <img src={img1} alt="blue origin farms" />
                <p className='price'>${price} per {unit}</p>
                <div className='details'>
                    <p className='name'>{name}</p>
                    <p className='location'>{city}, {country}</p>
                </div>
            </div>
        )
    }

    return (
        <section className='most-picked container'>
            <h4 className='title'>Most Picked</h4>
            <div className='items'>
                <Card
                    isBig
                    price={data[0].price}
                    unit={data[0].unit}
                    city={data[0].city}
                    country={data[0].country}
                    name={data[0].name}
                />
                <div className='others'>
                    {
                        data.slice(1).map((item, index) => {
                            return (
                                <Card
                                    key={index}
                                    price={item.price}
                                    unit={item.unit}
                                    city={item.city}
                                    country={item.country}
                                    name={item.name}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default MostPicked