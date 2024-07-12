import {Link} from 'react-router-dom'

import WatchContext from '../../context/WatchContext'

import {
  VideoLink,
  GamingVideoContainer,
  VideoImage,
  Title,
  Rating,
} from './styledComponents'

const GamingVideoCard = props => (
  <WatchContext.Consumer>
    {value => {
      const {isDark} = value
      const {videoDetails} = props
      const {id, title, thumbnailUrl, viewCount} = videoDetails

      return (
        <GamingVideoContainer>
          <VideoLink as={Link} to={`/videos/${id}`}>
            <VideoImage src={thumbnailUrl} alt="video thumbnail" />
            <Title isDark={isDark}>{title}</Title>
            <Rating>{viewCount} Watching Worldwide</Rating>
          </VideoLink>
        </GamingVideoContainer>
      )
    }}
  </WatchContext.Consumer>
)

export default GamingVideoCard
