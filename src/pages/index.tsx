import * as React from 'react'

import IndexLayout from '../layouts'
import Section from '../components/Section'
import AboutSection from '../components/about/AboutSection'

const IndexPage = () => (
  <IndexLayout>
    <AboutSection/>
    <Section title='Work' id='work'>
      aa
    </Section>
    <Section title='Skill' id='skill'>
      aa
    </Section>
    <Section title='Contact' id='contact'>
      aa
    </Section>
  </IndexLayout>
)

export default IndexPage
