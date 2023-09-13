import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import HeroImg2 from '../Components/HeroImg2';
import AboutContent from '../Components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />

      <Footer />
      <HeroImg2 heading="ABOUT" text="I'm a friendly Front-End developer." />
      <AboutContent />
    </div>
  )
}

export default About