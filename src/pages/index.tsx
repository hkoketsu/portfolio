import * as React from 'react'

import IndexLayout from '../layouts'
import Section from '../components/Section'
import AboutSection from '../components/about/AboutSection'
import WorkSection from '../components/work/WorkSection'

const IndexPage = () => (
  <IndexLayout>
    <AboutSection />
    <WorkSection />
    <Section title='Skill' id='skill'>
      aa
    </Section>
    <Section title='Contact' id='contact'>
      aa
    </Section>
  </IndexLayout>
)

export default IndexPage
