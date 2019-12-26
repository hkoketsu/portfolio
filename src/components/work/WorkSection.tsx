import * as React from 'react'
import Section from '../Section'
import styled from '@emotion/styled'
import Card from './Card'
import cardData from './card_data'
import { Grid } from '@material-ui/core'


const WorkSection: React.FC = () => (
  <Section title='Works' id='work'>
    <CardWrapper>
      <Grid container md={12}>
      {
        cardData.data.map((data: any, index: number) => (
            <Card key={index} src={data.image_src} url={data.url} caption={data.caption} />
        ))
      }
       </Grid>
    </CardWrapper>
  </Section>
)

export default WorkSection

const CardWrapper = styled.div`
  max-width: 80%;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  align-items: flex-start;
  min-height: 100vh;
`