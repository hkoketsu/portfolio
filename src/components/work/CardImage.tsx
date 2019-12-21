import * as React from 'react'
import styled from '@emotion/styled'

type CardImgLinkProps = {
  href: string,
  src: string,
  alt: string
}

const CardImage: React.FC<CardImgLinkProps> = ({ href, src, alt }) => (
  <StyledLink href={href}>
    <StyledImg src={src} alt={alt} />
  </StyledLink>
)

export default CardImage

const StyledLink = styled.a`
  flex-basis: 31%;
  margin-bottom: 60px;
`

const StyledImg = styled.img`
  -webkit-transition: 1.5s;
  -moz-transition: 1.5s;
  -ms-transition: 1.5s;
  -o-transition: 1.5s;
  transition: 1.5s;
  opacity: 0.8;
  width: 100%;
`