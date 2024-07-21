import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServiceImg from "../reimages/night.jpg"
import Footer from '../components/Footer'
import Trip from './../components/Trip';

const Service = () => {
    return (
        <div>
            <Navbar/>
            <Hero
                cName = "hero-mid"
                heroImg = {ServiceImg}
                title = "Service"
                buttonText = "Travel Plan"
                url = "/"
                btnClass = "hide"
            />
            <Trip/>
            <Footer/>
        </div>
    )
}

export default Service
