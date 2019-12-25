import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Rating from './Rating'

export type SkillProps = {
  title: string,
  rating: number
}

const Skill: React.FC<SkillProps> = ({ title, rating }) => (
  <Grid container item>
    <Grid item xs={7}>
      <div>{title}</div>
    </Grid>
    <Grid item xs={5}>
      <Rating rating={rating}/>
    </Grid>
  </Grid>
)

export default Skill;

