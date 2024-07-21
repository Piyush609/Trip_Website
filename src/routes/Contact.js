import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ContactImg from "../reimages/2.jpg"
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <Hero
                cName = "hero-mid"
                heroImg = {ContactImg}
                title = "Contact"
                buttonText = "Travel Plan"
                url = "/"
                btnClass = "hide"
            />
            <ContactForm/>
            <Footer/>
        </div>
    )
}

export default Contact
