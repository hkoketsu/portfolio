import * as React from 'react'
import styled from '@emotion/styled'


const ProfileDesctiption: React.FC = ({ children }) => (
  <StyledDescription>
    <div>{children}</div>
  </StyledDescription>
)

export default ProfileDesctiption;

const StyledDescription = styled.div`
  flex-basis: 62%;
`