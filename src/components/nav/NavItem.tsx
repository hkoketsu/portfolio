import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { colors } from '../../styles/variables'

type NavItemProp = {
  url: string
}

const NavItem: React.FC<NavItemProp> = props => (
  <StyledListItem>
    <StyledLink to={props.url}>{props.children}</StyledLink>
  </StyledListItem>
)

export default NavItem

const StyledListItem = styled.li`
  list-style-type: none;
`

const StyledLink = styled(Link)`
  position: relative;
  display: inline-block;

  padding: 0px 20px;

  color: ${colors.white};
  font-size: 1.2rem;
  font-weight: 400;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`
