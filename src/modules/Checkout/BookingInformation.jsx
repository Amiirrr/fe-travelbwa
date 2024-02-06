import React from 'react'
import img from '@/assets/img/mostpicked-1.png'

import { InputText } from '@/components/Form'

import '../../styles/modules/Checkout/_Booking-information.scss'

const BookingInformation = ({ data, checkout, ItemDetasils, onChange }) => {
    return (
        <div className='booking_information wrapper'>
            <div className='info'>
                <figure>
                    <img src={img} alt="hotel" />
                    <figcaption>
                        <div>
                            <p className='name'>Podo Wae</p>
                            <p className='location'>Madiun, Indonesia</p>
                        </div>
                        <p className='total-price'><span>$480 USD</span> per <span>2 night</span></p>
                    </figcaption>
                </figure>
            </div>
            <div className='form'>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <InputText
                        name='firstName'
                        type="text"
                        placeholder='Please input first name...'
                        onChange={onChange}
                        value={data.firstName}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <InputText
                        name='lastName'
                        type="text"
                        placeholder='Please input last name...'
                        onChange={onChange}
                        value={data.lastName}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <InputText
                        name='email'
                        type="email"
                        placeholder='Please input email address...'
                        onChange={onChange}
                        value={data.email}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <InputText
                        name='phone'
                        type="tel"
                        placeholder='Please input phone number...'
                        onChange={onChange}
                        value={data.phone}
                    />
                </div>
            </div>
        </div>
    )
}

export default BookingInformation