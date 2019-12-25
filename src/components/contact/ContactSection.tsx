import * as React from 'react'
import Section from '../Section'
import styled from '@emotion/styled'
import twitterIcon from '../../img/icon/icon_tw.png'


const ContactSection: React.FC = () => (
  <Section title='Contact' id='contact'>
    <Center>
      <div>
        Contact me via email or social media.
      </div>
      <ContactList>
        <ContactListItem>
          <a href="https://twitter.com/khiro_ca" target="_blank"><img src={twitterIcon} alt=""/></a>
        </ContactListItem>
        <ContactListItem>
          <a href="https://www.linkedin.com/in/hkoketsu/" target="_blank"><img src={twitterIcon} alt=""/></a>
        </ContactListItem>
      </ContactList>
      <Email>hiroki.koketsu@gmail.com</Email>
    </Center>
  </Section>
)

export default ContactSection;

const Center = styled.div`
  margin: auto;
`

const ContactList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 150px;
  margin: 0 auto;
  padding-inline-start: 0;
`

const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;

  img {
    width: 50px;
  }
`

const Email = styled.div`
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
`