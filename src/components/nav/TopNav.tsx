import * as React from 'react'
import styled from '@emotion/styled'
import NavItem from './NavItem'

const TopNav: React.FC = () => (
  <StyledTopNav>
    <StyledList>
      <NavItem url="#about">about</NavItem>
      <NavItem url="#work">work</NavItem>
      <NavItem url="#skill">skill</NavItem>
      <NavItem url="#contact">contact</NavItem>
    </StyledList>
  </StyledTopNav>
)

export default TopNav

const StyledTopNav = styled.nav`
  position: fixed;
  z-index: 100;
  width: 100%;
  background-color: #3d3d3d;
`
const StyledList = styled.ul`
  height: 100%;
  padding-inline-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
