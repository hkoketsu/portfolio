import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { colors } from '../../styles/variables'

type NavItemProp = {
    url: string;
}
  
const NavItem: React.FC<NavItemProp> = props => (
  <StyledListItem>
    <StyledLink href={props.url}>
      {props.children}
    </StyledLink>
  </StyledListItem>
)

export default NavItem;

const StyledListItem = styled.li`
  list-style-type: none;
`

const StyledLink = styled.a`
  position: relative;
  display: inline-block;

  font-size: 1.5rem;
  font-weight: 600;
  padding: 0px 24px;
  
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`