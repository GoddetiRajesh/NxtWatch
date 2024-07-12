import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {RxDotFilled} from 'react-icons/rx'

import WatchContext from '../../context/WatchContext'

import {
  VideoItemContainer,
  VideoLink,
  VideoImage,
  CardConatiner,
  ProfileImage,
  ChannelContainer,
  Title,
  DisplayContainer,
  TextContainer,
  Text,
  DotIcon,
} from './styledComponents'

const HomeVideoCard = props => (
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
        <VideoItemContainer>
          <VideoLink as={Link} to={`/videos/${id}`}>
            <VideoImage src={thumbnailUrl} alt="video thumbnail" />
            <CardConatiner>
              <ProfileImage src={channel.profileImageUrl} alt="channel logo" />
              <ChannelContainer>
                <Title isDark={isDark}>{title}</Title>
                <DisplayContainer>
                  <Text>{channel.name}</Text>
                  <TextContainer>
                    <Text>{viewCount} views</Text>
                    <DotIcon as={RxDotFilled} />
                    <Text>{date}</Text>
                  </TextContainer>
                </DisplayContainer>
                <DisplayContainer mobile>
                  <Text>{channel.name}</Text>
                  <DotIcon as={RxDotFilled} />
                  <TextContainer>
                    <Text>{viewCount} views</Text>
                    <DotIcon as={RxDotFilled} />
                    <Text>{date}</Text>
                  </TextContainer>
                </DisplayContainer>
              </ChannelContainer>
            </CardConatiner>
          </VideoLink>
        </VideoItemContainer>
      )
    }}
  </WatchContext.Consumer>
)

export default HomeVideoCard
