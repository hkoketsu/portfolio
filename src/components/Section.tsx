import * as React from 'react'
import styled from '@emotion/styled'

type SectionProps = {
  title: string
  id: string
  color?: string
}

const Section: React.FC<SectionProps> = ({ title, id, color, children }) => (
  <StyledSection id={id} color={color}>
    <StyledInnerDiv>
      <StyledTitleArea>
        <StyledSectionTitle>{title}</StyledSectionTitle>
      </StyledTitleArea>
      <StyledSectionBody>{children}</StyledSectionBody>
    </StyledInnerDiv>
  </StyledSection>
)

export default Section

const StyledSection = styled.section`
  background-color: ${props => (props.color ? props.color : 'black')};
  padding: 50px 0;
`

const StyledInnerDiv = styled.div`
  max-width: 1380px;
  margin: 0 auto;
  padding: 0 40px;
`

const StyledTitleArea = styled.div`
  margin-bottom: 50px;
  text-align: center;
`

const StyledSectionTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 15px;
  letter-spacing: 0.05em;
`

const StyledSectionBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
