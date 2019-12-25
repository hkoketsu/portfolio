import * as React from 'react'
import styled from '@emotion/styled'
import Grid from '@material-ui/core/Grid'
import Skill from './Skill'

type SkillBoxProps = {
  title?: string
}

const SkillBox: React.FC<SkillBoxProps> = ({ title }) => (
  <FlexContent>
    <h2>{title}</h2>
    <Grid container direction='row' spacing={1}>
      <Skill title='a' year={1} rating={2} />
      <Skill title='b' year={1} rating={2}/>
      <Skill title='c' year={1} rating={2}/>
    </Grid>
  </FlexContent>
)

export default SkillBox;

const FlexContent = styled.div`
  padding: 50px;
`