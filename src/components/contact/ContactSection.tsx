import * as React from 'react'
import Section from '../Section'
import styled from '@emotion/styled'
import { colors } from '../../styles/variables'
import Form from './Form'
import ContactList from './ContactList'

const ContactSection: React.FC = () => (
  <Section title="Contact" id="contact" color={colors.dark_grey}>
    <Center>
      <Form />
      <Center>
        <ContactList />
      </Center>
    </Center>
  </Section>
)

export default ContactSection

const Center = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`
