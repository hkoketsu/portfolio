import * as React from 'react'
import styled from '@emotion/styled'
import Grid from '@material-ui/core/Grid'

type SkillProps = {
  title: string,
  year: number,
  rating: number
}



const Skill: React.FC<SkillProps> = ({ title, year, rating }) => (
  <Grid container item xs={12}>
    <Grid item xs={3}>
      <div>{title}</div>
    </Grid>
    <Grid item xs={2}>
      <div>{year}</div>
    </Grid>
    <Grid item xs={7}>
      <div>{rating}</div>
    </Grid>
  </Grid>
)

export default Skill;

