import * as React from 'react'

import IndexLayout from '../layouts'
import WorkSection from '../components/work/WorkSection'
import styled from '@emotion/styled'

const WorkPage = () => (
  <IndexLayout>
    <TopMargin />
    <WorkSection />
  </IndexLayout>
)

export default WorkPage

const TopMargin = styled.div`
  padding-top: 50px;
`
