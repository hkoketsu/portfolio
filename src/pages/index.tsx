import * as React from 'react'

import IndexLayout from '../layouts'
import Section from '../components/Section'
import AboutSection from '../components/about/AboutSection'
import WorkSection from '../components/work/WorkSection'
import SkillSection from '../components/skill/SkillSection'

const IndexPage = () => (
  <IndexLayout>
    <AboutSection />
    <WorkSection />
    <SkillSection />
    <Section title='Contact' id='contact'>
      aa
    </Section>
  </IndexLayout>
)

export default IndexPage
