import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import DesktopMenu from '../DesktopMenu'
import WatchContext from '../../context/WatchContext'
import FailureView from '../FailureView'
import LoaderView from '../LoaderView'
import GamingVideoCard from '../GamingVideoCard'

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

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingVideosList: [],
  }

  componentDidMount() {
    this.getGamingVideosList()
  }

  getGamingVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
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
        viewCount: eachValue.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        gamingVideosList: updatedList,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {gamingVideosList} = this.state
    return (
      <TrendingListContainer>
        {gamingVideosList.map(eachItem => (
          <GamingVideoCard key={eachItem.id} videoDetails={eachItem} />
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
        return <FailureView callFunction={this.getGamingVideosList} />
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
                      <Icon as={SiYoutubegaming} />
                    </IconContainer>
                    <Heading isDark={isDark}>Gaming</Heading>
                  </TrendingBanner>
                  <TrendingVideosContainer data-testid="gaming" isDark={isDark}>
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

export default Gaming
