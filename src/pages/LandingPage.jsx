import React from 'react'

import Header from '@/components/layout/Header'
import Hero from '@/modules/landingpage/Hero'
import landingPage from '@/json/landingPage.json'
import MostPicked from '@/modules/landingpage/MostPicked'
import Categories from '@/modules/landingpage/Categories'
import Testimony from '@/modules/landingpage/Testimony'
import Footer from '@/components/layout/Footer'

const LandingPage = () => {
    return (
        <div>
            <Header></Header>
            <Hero data={landingPage.hero} />
            <MostPicked data={landingPage.mostPicked} />
            <Categories data={landingPage.categories} />
            <Testimony data={landingPage.testimonial} />
            <Footer />
        </div>
    )
}

export default LandingPage