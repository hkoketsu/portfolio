import * as React from 'react'
import styled from '@emotion/styled'

type CardImgLinkProps = {
  href: string,
  image: string,
  alt: string
}

const CardImage: React.FC<CardImgLinkProps> = ({ href, image, alt }) => (
  <StyledLink href={href}>
    <StyledImg src={require(`../../img/cards/${image}`)} alt={alt} />
  </StyledLink>
)

export default CardImage

const StyledLink = styled.a`
`

const StyledImg = styled.img`
  width: 100%;
  margin: 10px 10px;
`