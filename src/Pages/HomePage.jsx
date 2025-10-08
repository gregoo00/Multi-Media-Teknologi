import React from 'react'
import Home from '../Components/Home/Home'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Testimony from '../Components/Testimonies/Testimonies'
import AdvantageCard from '../Components/AdvantageCard/AdvantageCard'

export default function HomePage(){
    return(
        <>
            <Navbar />
            <Home />
            <AdvantageCard />
            <Testimony />
            <Footer />
        </>
    )
}