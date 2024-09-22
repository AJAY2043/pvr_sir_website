import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Project from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Testimonials from '../Testimonals/Testimonials'
import Blog from '../Blog/Blog'
import UserStories from '../UserStories/UserStories'
import FAQ from '../FAQ/FAQ'
import CTA from '../CTA/CTA'
import Newsletter from '../NewsLetter/NewsLetter'
import Interviews from '../InterViews/Interviews'
import MyJourney from '../MyJourney/MyJourney'
import Carousal from '../Carousal/Carousal'

const Sections = () => {
  return (
    <div>
      <Hero/>
      <About/> 
      <Carousal/> 
      <MyJourney/>
      <Blog/>
      <Interviews/>
      <Skills/>
      <Project/>
      <UserStories/>
      <Testimonials/>
      <Newsletter/>
      <FAQ/>
      <CTA/>
      <Contact/>
    </div>
  )
}

export default Sections
