import React from 'react'

import Header from '@/components/layout/Header'
import Hero from '@/modules/Hero'
import landingPage from '@/json/landingPage.json'
import Footer from '@/components/layout/Footer'


const LandingPage = () => {
    // console.log(landingPage.hero)
    return (
        <div>
            <Header></Header>
            <Hero data={landingPage.hero} />
            {/* <Footer /> */}
        </div>
    )
}

export default LandingPage