import * as React from 'react'
import styled from '@emotion/styled'

type RatingProps = {
  rating: number
}


const stars = (star: string, rating: number) => 
  star === '★' ? star.repeat(rating) : star.repeat(5-rating);

const Rating: React.FC<RatingProps> = ({ rating }) => (
  <StyledRating rating={rating}/>
)

export default Rating;


const StyledRating = styled.div`
  &::before {
    content: '${props => stars('★', props.rating)}';
  }

  &::after {
    content: '${props => stars('☆', props.rating)}';
  }
`