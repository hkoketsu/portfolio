import * as React from 'react'
import styled from '@emotion/styled'
import CardImage from './CardImage'
import CardCaption, { ICaption } from './CardCaption'
import { Grid, Card } from '@material-ui/core'


type CardImgLinkProps = {
  src: string,
  url: string,
  caption: ICaption
}

const WordCard: React.FC<CardImgLinkProps> = ({caption, url, src}) => (
  <StyledCard>
    <Grid container xs={12} direction='row' alignItems='center'>
      <Grid item xs={6}>
        <CardImage href={url} image={src} alt={caption.title} />
      </Grid>
      <Grid item xs={6}>
        <CardCaption title={caption.title} info={caption.info} language={caption.language} url={caption.url} />
      </Grid>
    </Grid>
    
  </StyledCard>
)

export default WordCard

const StyledCard = styled(Card)`
  flex-basis: 50%;
  margin: 10px;
  padding: 10px;
`

