import React from 'react'

import Header from '@/components/layout/Header'
import Hero from '@/modules/landingpage/Hero'
import landingPage from '@/json/landingPage.json'
import MostPicked from '@/modules/landingpage/MostPicked'
import Footer from '@/components/layout/Footer'


const LandingPage = () => {
    // console.log(landingPage.hero)
    return (
        <div>
            <Header></Header>
            <Hero data={landingPage.hero} />
            <MostPicked />
            {/* <Footer /> */}
        </div>
    )
}

export default LandingPage