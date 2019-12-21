import * as React from 'react'
import styled from '@emotion/styled'
import CardImage from './CardImage'
import CardCaption, { ICaption } from './CardCaption'

type CardImgLinkProps = {
  src: any,
  alt: string
  cap: ICaption
}

const Card: React.FC<CardImgLinkProps> = ({cap, src, alt}) => (
  <StyledDiv>
    <CardImage href={cap.url} src={src} alt={alt} />
    <CardCaption title={cap.title} info={cap.info} url={cap.url} />
  </StyledDiv>
)

export default Card

const StyledDiv = styled.div`
  flex-basis: 33%;
  margin-bottom: 60px;
`

