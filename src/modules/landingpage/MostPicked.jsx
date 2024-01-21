import React from 'react'

import img1 from '@/assets/img/mostpicked-1.png'

const MostPicked = () => {

    // function card(props) {

    //     if (props === "big") {
    //         return (
    //             <div className='card '>

    //             </div>
    //         )

    //     }
    // }

    // console.log(card("big"))



    return (
        <section className='most-picked container'>
            <h4 className='title'>Most Picked</h4>
            <div className='gallery'>
                <div className='card card-big'>
                    <img src={img1} alt="blue origin farms" />
                    <p className='price'>$50 per night</p>
                    <div className='details'>
                        <p className='hotels'>Blue Origin Fams</p>
                        <p className='location'>Jakarta, Indonesia</p>
                    </div>
                </div>
                <div className='others'>
                    <div className='card'>
                        <img src={img1} alt="blue origin farms" />
                        <p className='price'>$50 per night</p>
                        <div className='details'>
                            <p className='hotels'>Blue Origin Fams</p>
                            <p className='location'>Jakarta, Indonesia</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={img1} alt="blue origin farms" />
                        <p className='price'>$50 per night</p>
                        <div className='details'>
                            <p className='hotels'>Blue Origin Fams</p>
                            <p className='location'>Jakarta, Indonesia</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={img1} alt="blue origin farms" />
                        <p className='price'>$50 per night</p>
                        <div className='details'>
                            <p className='hotels'>Blue Origin Fams</p>
                            <p className='location'>Jakarta, Indonesia</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={img1} alt="blue origin farms" />
                        <p className='price'>$50 per night</p>
                        <div className='details'>
                            <p className='hotels'>Blue Origin Fams</p>
                            <p className='location'>Jakarta, Indonesia</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default MostPicked