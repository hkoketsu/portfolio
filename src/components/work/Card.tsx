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
  <Grid item md={6}>
    <StyledCard>
      <Grid container item sm={12} direction='row' alignItems='center' justify='center'>
        <Grid item sm={6}>
          <CardImage href={url} image={src} alt={caption.title} />
        </Grid>
        <Grid item sm={6}>
          <CardCaption title={caption.title} info={caption.info} language={caption.language} url={caption.url} />
        </Grid>
      </Grid>
    </StyledCard>
  </Grid>
)

export default WordCard

const StyledCard = styled(Card)`
  flex-basis: 50%;
  margin: 10px;
  padding: 10px 20px;
  transition: 0.3s;

  &:hover {
    box-shadow: 3px 3px 10px 0px lightgray;
    transform: translateY(-3px);
    transition: 0.3s;

  }
`

