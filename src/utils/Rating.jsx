import React from 'react'

import star from '@/assets/img/icon/star.svg'
import halfStar from '@/assets/img/icon/half-star.svg'

const Rating = ({ rate }) => {

    const rating = Math.floor(rate)
    const sisa = rate - rating;

    const renderStar = Array.from({ length: rating }, (_, index) => (
        <img key={index} src={star} alt="rating" />
    ));

    return (
        <div className='rating'>
            {renderStar}
            {sisa > 0 && <img src={halfStar} alt="rating" />}
        </div>


    )
}

export default Rating