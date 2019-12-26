import * as React from 'react'
import Section from '../Section'
import styled from '@emotion/styled'
import SkillBox from './SkillBox'
import skillData from './skill_data'

const SkillSection: React.FC = () => (
  <Section title='Skills' id='skill'>
    <HorizontalDiv>
      {
        skillData.data.map( (skillBlock: any, index: number) => (
          <SkillBox key={index} title={skillBlock.category} skills={skillBlock.values}/>
        ))
      }
    </HorizontalDiv>
  </Section>
)

export default SkillSection;

const HorizontalDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  width: 90%;
`