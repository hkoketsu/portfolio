import * as React from 'react'
import styled from '@emotion/styled'
import Grid from '@material-ui/core/Grid'
import SkillBox from './SkillBox';
import skillData from './skill_data'


const SkillWrapper: React.FC = () => (
  <HorizontalDiv>
    {
      skillData.data.map( (skillBlock: any) => (
        <SkillBox title={skillBlock.key} skills={skillBlock.values}/>
      ))
    }
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