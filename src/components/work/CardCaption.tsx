import * as React from 'react'
import styled from '@emotion/styled'

export interface ICaption {
  title: string,
  info: string,
  url: string
}

const CardCaption: React.FC<ICaption> = (caption) => (
  <StyledCaptionWrapper>
    <StyledTitle>{caption.title}</StyledTitle>
    <StyledInfo>{caption.info}</StyledInfo>
    <StyledUrl url={caption.url} />
  </StyledCaptionWrapper>
)

export default CardCaption

const StyledCaptionWrapper = styled.div`
  text-align: center;
`
const StyledTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 8px;
`
const StyledInfo = styled.div`
  font-size: 10px;
`

type UrlProps = {
  url: string
}

const captionUrl: React.FC<UrlProps> = ({ url }) => (
  <div>
    <a href={url}></a>
  </div>
)

const StyledUrl = styled(captionUrl)`
  font-size: 10px;
`