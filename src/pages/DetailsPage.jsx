import React, { useState } from 'react'
import Header from '@/components/layout/Header'
import HeadingDetail from '@/modules/HeadingDetail'
import FuturedImages from '@/modules/FuturedImages'
import DescDetailPage from '@/modules/DescDetailPage'
import BookingForm from '@/modules/BookingForm'
import Categories from '@/modules/Categories'
import Testimony from '@/modules/Testimony'
import Footer from '@/components/layout/Footer'

import data from '@/json/itemDetails.json'

const DetailsPage = () => {
    return (
        <div>
            <Header />
            <HeadingDetail data={data} />
            <FuturedImages data={data} />
            <section className='container section-detail'>
                <DescDetailPage />
                <BookingForm dummy={data} />
            </section>
            <Categories data={data.categories} />
            <Testimony data={data.testimonial} />
            <Footer />
        </div>
    )
}

export default DetailsPage