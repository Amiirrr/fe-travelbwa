import React from 'react'

import Header from '@/components/layout/Header'
import Hero from '@/modules/Hero'
import landingPage from '@/json/landingPage.json'
import MostPicked from '@/modules/MostPicked'
import Categories from '@/modules/Categories'
import Testimony from '@/modules/Testimony'
import Footer from '@/components/layout/Footer'

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Hero data={landingPage.hero} />
            <MostPicked data={landingPage.mostPicked} />
            <Categories data={landingPage.categories} />
            <Testimony data={landingPage.testimonial} />
            <Footer />
        </div>
    )
}

export default LandingPage