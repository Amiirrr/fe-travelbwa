import React from 'react'
import imgCompleted from '@/assets/img/image_completed.svg'

const Completed = () => {
    return (
        <div className='completed wrapper'>
            <div className='info'>
                <figure>
                    <img src={imgCompleted} alt="completed" />
                    <figcaption>
                        <p>We will inform you via email later once the transaction has been accepted</p>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default Completed