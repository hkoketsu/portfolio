import React from 'react'
import IndexLayout from '../layouts'
import AboutSection from '../components/about/AboutSection'
import SkillSection from '../components/skill/SkillSection'
import ContactSection from '../components/contact/ContactSection'
import Header from '../components/Header'

const IndexPage = () => (
  <IndexLayout>
    <Header title="hkoketsu" />
    <AboutSection />
    <SkillSection />
    <ContactSection />
  </IndexLayout>
)

export default IndexPage
