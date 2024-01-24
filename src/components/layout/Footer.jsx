import React from 'react'
import IconText from '../IconText'

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='information'>
                    <div className='about'>
                        <IconText />
                        <p>We kaboom your beauty holiday instantly and memorable.</p>
                    </div>
                    <div className='info'>
                        <h5>For Beginners</h5>
                        <p>New Account</p>
                        <p>Start Booking</p>
                        <p>Use Payments</p>
                    </div>
                    <div className='explore'>
                        <h5>For Beginners</h5>
                        <p>Our Careers</p>
                        <p>Privacy</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div className='contact'>
                        <h5>Connect Us</h5>
                        <p>support@stacation.id</p>
                        <p>021-2208-1996</p>
                        <p>Staycation, Kemang, Jakarta</p>
                    </div>
                </div>
                <div className='copyright'>
                    <p>Copyright 2024 • All rights reserved • Staycation</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer