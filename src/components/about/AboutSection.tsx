import * as React from 'react'
import Section from '../Section'
import ProfileImage from './ProfileImg'
import Paragraph from './Profile'
import styled from '@emotion/styled'
import { colors } from '../../styles/variables'


const AboutSection: React.FC = () => (
  <Section title='About' id='about' color={colors.dark_grey}>
    <ProfileImage/>
    <ProfileDesctiption>
      <Paragraph/>
    </ProfileDesctiption>
  </Section>
)

export default AboutSection

const ProfileDesctiption = styled.div`
  flex-basis: 62%;
  margin: 0 auto;
`