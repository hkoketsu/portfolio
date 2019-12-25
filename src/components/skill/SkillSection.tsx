import * as React from 'react'
import Section from '../Section'
import styled from '@emotion/styled'
import SkillBox from './Skill'
import SkillWrapper from './SkillWrapper'
import { colors } from '../../styles/variables'



const SkillSection: React.FC = () => (
  <Section title='Skills' id='skill' color={colors.grey_background}>
    <SkillWrapper />
  </Section>
)

export default SkillSection
