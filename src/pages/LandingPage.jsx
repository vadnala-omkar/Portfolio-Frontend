import React from 'react'
import NavBar from '../components/staticComponents/NavBar'
import Jumbotron from '../components/staticComponents/Jumbotron'
import AboutMe from '../components/staticComponents/AboutMe'
import Skills from '../components/dynamicComponents/Skills'
import Projects from '../components/dynamicComponents/Projects'
import Certifications from '../components/dynamicComponents/Certifications'
import Experience from '../components/dynamicComponents/Experience'
import Blog from '../components/staticComponents/Blog'
import Contact from '../components/staticComponents/Contact'

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Jumbotron />
      <AboutMe />
      <Skills />
      <Projects />
      <Certifications/>
      <Experience />
      <Contact />
    </>
  )
}

export default LandingPage
