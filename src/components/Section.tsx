import * as React from 'react'
import styled from '@emotion/styled'

type SectionProps = {
  title: string,
  id: string,
  color?: string
}

const Section: React.FC<SectionProps> = ({ title, id, color, children }) => (
  <StyledSection id={id} color={color}>
    <StyledInnerDiv>
      <StyledTitleArea>
        <StyledSectionTitle>
          {title}
        </StyledSectionTitle>
      </StyledTitleArea>
      <StyledSectionBody>
        {children}
      </StyledSectionBody>
    </StyledInnerDiv>
  </StyledSection>
)

export default Section;

const StyledSection = styled.section`
  background-color: ${props => props.color ? props.color : 'white'};
  padding: 50px 0;
`

const StyledInnerDiv = styled.div`
  max-width: 1380px;
  margin: 0 auto;
  padding: 0 40px;
`

const StyledTitleArea = styled.div`
  margin-bottom: 38px;
  text-align: center;
`

const StyledSectionTitle = styled.h2`
  font-size: 40px;
  font-weight: normal;
  line-height: 1;
  margin-bottom: 15px;
  letter-spacing: .05em;
`

const StyledSectionBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`