import * as React from 'react'
import styled from '@emotion/styled'
import NavItem from './NavItem'

const TopNav: React.FC = () => (
  <StyledTopNav>
    <StyledList>
      <NavItem url="/">Home</NavItem>
      <NavItem url="/work">Works</NavItem>
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
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
