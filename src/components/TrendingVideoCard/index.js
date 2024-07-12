import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {RxDotFilled} from 'react-icons/rx'

import WatchContext from '../../context/WatchContext'

import {
  VideoItemContainer,
  VideoLink,
  VideoImage,
  ProfileImage,
  ChannelContainer,
  Title,
  DisplayContainer,
  TextContainer,
  Text,
  DotIcon,
} from './styledComponents'

const TrendingVideoCard = props => (
  <WatchContext.Consumer>
    {value => {
      const {isDark} = value
      const {videoDetails} = props
      const {
        id,
        title,
        thumbnailUrl,
        channel,
        viewCount,
        publishedAt,
      } = videoDetails
      const date = formatDistanceToNow(new Date(publishedAt))

      return (
        <VideoLink as={Link} to={`/videos/${id}`}>
          <VideoItemContainer>
            <VideoImage src={thumbnailUrl} alt="video thumbnail" />
            <DisplayContainer mobile>
              <ProfileImage src={channel.profileImageUrl} alt="channel logo" />
              <ChannelContainer>
                <Title isDark={isDark}>{title}</Title>
                <TextContainer>
                  <Text>{channel.name}</Text>
                  <DotIcon as={RxDotFilled} />
                  <Text>{viewCount} views</Text>
                  <DotIcon as={RxDotFilled} />
                  <Text>{date}</Text>
                </TextContainer>
              </ChannelContainer>
            </DisplayContainer>
            <DisplayContainer>
              <Title isDark={isDark}>{title}</Title>
              <Text>{channel.name}</Text>
              <TextContainer>
                <Text>{viewCount} views</Text>
                <DotIcon as={RxDotFilled} />
                <Text>{date}</Text>
              </TextContainer>
            </DisplayContainer>
          </VideoItemContainer>
        </VideoLink>
      )
    }}
  </WatchContext.Consumer>
)

export default TrendingVideoCard
