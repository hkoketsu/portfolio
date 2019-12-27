import * as React from 'react'
import styled from '@emotion/styled'

import facebookIcon from '../../img/icon/facebook.png'
import linkedinIcon from '../../img/icon/linkedin.png'
import githubIcon from '../../img/icon/github.png'

const ContactList: React.FC = () => (
  <StyledList>
    <ContactListItem>
      <a href="https://www.linkedin.com/in/hkoketsu/" target="_blank">
        <img src={linkedinIcon} alt="linkedin" />
      </a>
    </ContactListItem>
    <ContactListItem>
      <a href="https://github.com/hkoketsu" target="_blank">
        <img src={githubIcon} alt="github" />
      </a>
    </ContactListItem>
    <ContactListItem>
      <a href="https://www.facebook.com/hiroki0kouketsu" target="_blank">
        <img src={facebookIcon} alt="facebook" />
      </a>
    </ContactListItem>
  </StyledList>
)

export default ContactList

const StyledList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  padding-inline-start: 0;
`

const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  margin: 0 15px;

  img {
    width: 40px;
  }
`
