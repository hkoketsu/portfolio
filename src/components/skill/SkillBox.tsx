import * as React from 'react'
import styled from '@emotion/styled'
import Grid from '@material-ui/core/Grid'
import Skill from './Skill'

type SkillBoxProps = {
  title: string
  skills: any[]
}

const SkillBox: React.FC<SkillBoxProps> = ({ title, skills }) => (
  <FlexContent>
    <SkillTitle>{title}</SkillTitle>
    <Grid container direction="row" spacing={1}>
      {skills.map((skill: any, index: number) => (
        <Skill key={index} title={skill.title} rating={skill.rating} />
      ))}
    </Grid>
  </FlexContent>
)

export default SkillBox

const SkillTitle = styled.h3`
  padding-bottom: 15px;
`

const FlexContent = styled.div`
  padding: 30px;
  width: 300px;
`
