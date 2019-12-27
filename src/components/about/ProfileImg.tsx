import * as React from 'react'
import styled from '@emotion/styled'
import profileImg from '../../img/profile.jpg'

const ProfileImage: React.FC = () => (
  <StyledProfileImage>
    <StyledImg src={profileImg} alt='profile'/>
  </StyledProfileImage>
)

export default ProfileImage

const StyledProfileImage = styled.div`
  flex-basis: 20%;
  margin: 0 auto 50px auto;
`

const StyledImg = styled.img`
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: 0 0 15px 0 #d9d9d9;
`