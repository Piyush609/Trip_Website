import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from "../reimages/night.jpg"
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'

const About = () => {
    return (
        <div>
            <Navbar/>
            <Hero
                cName = "hero-mid"
                heroImg = {AboutImg}
                title = "About"
                buttonText = "Travel Plan"
                url = "/"
                btnClass = "hide"
            />
            <AboutUs/>
            <Footer/>
        </div>
    )
}

export default About
