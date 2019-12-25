import * as React from 'react'
import styled from '@emotion/styled'
import Grid from '@material-ui/core/Grid'
import SkillBox from './SkillBox';

const SkillWrapper: React.FC = () => (
  <HorizontalDiv>
    <SkillBox title='Backend'/>
    <SkillBox title='Frontend'/>
    <SkillBox title='Others'/>
  </HorizontalDiv>
)

export default SkillWrapper;


const HorizontalDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  width: 90%;
`