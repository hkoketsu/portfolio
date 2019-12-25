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
  width: 100%;
  margin-bottom: 10px;  
`