import * as React from 'react'
import styled from '@emotion/styled'
import Grid from '@material-ui/core/Grid'
import Skill from './Skill'

type SkillBoxProps = {
  title: string,
  skills: any[]
}

const SkillBox: React.FC<SkillBoxProps> = ({ title, skills }) => (
  <FlexContent>
    <h2>{title}</h2>
    <Grid container direction='row' spacing={1}>
      {
        skills.map((skill) => 
          <Skill title={skill.title} rating={skill.rating} />
        )
      }
    </Grid>
  </FlexContent>
)

export default SkillBox;

const FlexContent = styled.div`
  padding: 30px;
  width: 300px;
`