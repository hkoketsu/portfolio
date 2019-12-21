import * as React from 'react'
import Section from '../Section'
import styled from '@emotion/styled'
import Card from './Card'
import appImg from '../../img/cards/procrastination-checker.png'
import rabbitImg from '../../img/cards/rabbit-rocket.png'
import rentalImg from '../../img/cards/rental-system.png'
import webImg from '../../img/cards/global-jp-bbs.png'
import { ProcrastinationCheckerCaps, RabbitRockerCaps, RentalSystemCaps, GlocalJpBbsCaps } from './Captions'


const WorkSection: React.FC = () => (
  <Section title='Works' id='work'>
    <CardWrapper>
      <Card src={appImg} alt='1' cap={ProcrastinationCheckerCaps}/>
      <Card src={rabbitImg} alt='2' cap={RabbitRockerCaps} />
      <Card src={rentalImg} alt='3' cap={RentalSystemCaps} />
      <Card src={webImg} alt='4' cap={GlocalJpBbsCaps} />
    </CardWrapper>
  </Section>
)

export default WorkSection

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`