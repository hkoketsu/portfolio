import styled from '@emotion/styled'
import * as React from 'react'
import oceanImg from '../img/ocean.jpg'
import { colors, heights } from '../styles/variables'
import Container from './Container'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderInner>
  </StyledHeader>
)

export default Header

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-image: url(${oceanImg});
  color: #f7f7f7;
  justify-content: center;
  height: 100vh;
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const HeaderTitle = styled.h1`
  color: ${colors.white};

  &:hover,
  &:focus {
    text-decoration: none;
  }
`