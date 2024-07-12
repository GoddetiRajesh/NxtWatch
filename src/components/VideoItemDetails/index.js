import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceStrict} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'

import WatchContext from '../../context/WatchContext'
import FailureView from '../FailureView'
import LoaderView from '../LoaderView'
import Header from '../Header'
import DesktopMenu from '../DesktopMenu'

import {
  VideoDetailsPageContainer,
  VideoDetailsPage,
  VideoDetailsContainer,
  VideoContainer,
  DetailsContainer,
  DetailsHeading,
  CardContainer,
  TextContainer,
  DotIcon,
  Text,
  Button,
  IconText,
  Icon,
  ProfileContainer,
  ProfileImage,
  ChannelContainer,
  VideoDescription,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    like: false,
    dislike: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const body = await response.json()
      const videoDetails = body.video_details
      const updatedDetails = {
        id: videoDetails.id,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        description: videoDetails.description,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: updatedDetails,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickLikeButton = () => {
    this.setState(prev => ({like: !prev.like, dislike: false}))
  }

  onClickDislikeButton = () => {
    this.setState(prev => ({dislike: !prev.dislike, like: false}))
  }

  renderSuccessView = () => (
    <WatchContext.Consumer>
      {value => {
        const {isDark, savedList, addSavedItems} = value
        const {videoDetails, like, dislike} = this.state
        const {
          id,
          title,
          videoUrl,
          channel,
          viewCount,
          publishedAt,
          description,
        } = videoDetails
        const date = formatDistanceStrict(new Date(publishedAt), new Date())
        const onClickSave = () => {
          addSavedItems(videoDetails)
        }
        const isSaved = savedList.find(eacItem => {
          if (eacItem.id === id) {
            return true
          }
          return false
        })
        let saved = null
        if (isSaved !== undefined) {
          saved = true
        } else {
          saved = false
        }

        return (
          <>
            <VideoContainer>
              <ReactPlayer url={videoUrl} controls height="100%" width="100%" />
            </VideoContainer>
            <DetailsContainer>
              <DetailsHeading isDark={isDark}>{title}</DetailsHeading>
              <CardContainer>
                <TextContainer>
                  <Text>{viewCount} views</Text>
                  <DotIcon as={BsDot} />
                  <Text>{date} ago</Text>
                </TextContainer>
                <TextContainer>
                  <Button onClick={this.onClickLikeButton} type="button">
                    <Icon active={like} as={BiLike} />
                    <IconText active={like}>Like</IconText>
                  </Button>
                  <Button onClick={this.onClickDislikeButton} type="button">
                    <Icon active={dislike} as={BiDislike} />
                    <IconText active={dislike}>Dislike</IconText>
                  </Button>
                  <Button onClick={onClickSave} type="button">
                    <Icon active={saved} as={CgPlayListAdd} />
                    <IconText active={saved}>
                      {saved ? 'Saved' : 'Save'}
                    </IconText>
                  </Button>
                </TextContainer>
              </CardContainer>
              <ProfileContainer>
                <ProfileImage
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <ChannelContainer>
                  <DetailsHeading channelName isDark={isDark}>
                    {channel.name}
                  </DetailsHeading>
                  <Text>{channel.subscriberCount} subscribers</Text>
                  <VideoDescription isDark={isDark}>
                    {description}
                  </VideoDescription>
                </ChannelContainer>
              </ProfileContainer>
            </DetailsContainer>
          </>
        )
      }}
    </WatchContext.Consumer>
  )

  renderDifferentViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderSuccessView()
      case 'FAILURE':
        return <FailureView callFunction={this.getVideoDetails} />
      default:
        return <LoaderView />
    }
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <VideoDetailsPageContainer
              data-testid="videoItemDetails"
              isDark={isDark}
            >
              <Header />
              <VideoDetailsPage>
                <DesktopMenu />
                <VideoDetailsContainer>
                  {this.renderDifferentViews()}
                </VideoDetailsContainer>
              </VideoDetailsPage>
            </VideoDetailsPageContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
