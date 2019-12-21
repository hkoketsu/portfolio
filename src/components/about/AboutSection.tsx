import * as React from 'react'
import Section from '../Section'
import ProfileImage from './ProfileImg'
import ProfileDesctiption from './ProfileDescription'
import styled from '@emotion/styled'


const AboutSection: React.FC = () => (
  <Section title='About' id='about' color='#ababab'>
    <ProfileImage/>
    <ProfileDesctiption>
      Software Engineer (Backend/Android/Unity)<br/>
      UBC Undergrad | 4th-year Business and Computer Science major<br/>
      <br/>
      Likes: guitar, workout, games, tea
    </ProfileDesctiption>
  </Section>
)

export default AboutSection
