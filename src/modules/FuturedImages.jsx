import React from 'react'
import img from '@/assets/img/mostpicked-1.png'

const FuturedImages = ({ data }) => {

    console.log(data.imageUrls.slice(1, 3))
    return (
        <section className='futured-image container'>
            <div className='big'>
                <img src={img} alt={data.imageUrls[0]._id} />
            </div>
            {
                data.imageUrls.length > 1 &&
                (
                    <div className='small'>
                        {
                            data.imageUrls.slice(1, 3).map((item, index) => (
                                <img key={index} src={img} alt={item._id} />
                            ))
                        }
                    </div>
                )
            }
        </section>
    )
}

export default FuturedImages