import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import DesktopMenu from '../DesktopMenu'
import WatchContext from '../../context/WatchContext'
import FailureView from '../FailureView'
import LoaderView from '../LoaderView'
import TrendingVideoCard from '../TrendingVideoCard'

import {
  TrendingPage,
  TrendingContainer,
  TrendingBanner,
  IconContainer,
  Icon,
  Heading,
  TrendingVideosContainer,
  TrendingListContainer,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideosList()
  }

  getTrendingVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const body = await response.json()
      const {videos} = body
      const updatedList = videos.map(eachValue => ({
        id: eachValue.id,
        title: eachValue.title,
        thumbnailUrl: eachValue.thumbnail_url,
        channel: {
          name: eachValue.channel.name,
          profileImageUrl: eachValue.channel.profile_image_url,
        },
        viewCount: eachValue.view_count,
        publishedAt: eachValue.published_at,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        trendingVideosList: updatedList,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {trendingVideosList} = this.state
    return (
      <TrendingListContainer>
        {trendingVideosList.map(eachItem => (
          <TrendingVideoCard key={eachItem.id} videoDetails={eachItem} />
        ))}
      </TrendingListContainer>
    )
  }

  renderDifferentView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderSuccessView()
      case 'FAILURE':
        return <FailureView callFunction={this.getTrendingVideosList} />
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
            <>
              <Header />
              <TrendingPage>
                <DesktopMenu />
                <TrendingContainer>
                  <TrendingBanner data-testid="banner" isDark={isDark}>
                    <IconContainer isDark={isDark}>
                      <Icon as={HiFire} />
                    </IconContainer>
                    <Heading isDark={isDark}>Trending</Heading>
                  </TrendingBanner>
                  <TrendingVideosContainer
                    data-testid="trending"
                    isDark={isDark}
                  >
                    {this.renderDifferentView()}
                  </TrendingVideosContainer>
                </TrendingContainer>
              </TrendingPage>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Trending
