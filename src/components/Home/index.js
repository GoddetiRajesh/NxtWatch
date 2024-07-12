import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoSearchSharp} from 'react-icons/io5'

import Header from '../Header'
import DesktopMenu from '../DesktopMenu'
import HomeBanner from '../HomeBanner'
import WatchContext from '../../context/WatchContext'
import FailureView from '../FailureView'
import LoaderView from '../LoaderView'
import HomeVideoCard from '../HomeVideoCard'

import {
  HomePage,
  HomeContainer,
  Container,
  SearchContainer,
  Search,
  SearchButton,
  SearchIcon,
  HomeListContainer,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosText,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    homeVideosList: [],
    searchValue: '',
  }

  componentDidMount() {
    this.getHomeVideosList()
  }

  updateSearchValue = event => {
    this.setState({searchValue: event.target.value})
  }

  onClickSearchButton = () => {
    this.getHomeVideosList()
  }

  onClickRetry = () => {
    this.getHomeVideosList()
  }

  getHomeVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchValue} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`
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
        homeVideosList: updatedList,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {homeVideosList} = this.state
    return homeVideosList.length === 0 ? (
      <WatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <NoVideosContainer>
              <NoVideosImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoVideosHeading isDark={isDark}>
                No Search Results Found
              </NoVideosHeading>
              <NoVideosText>
                Try different key words or remove search filter
              </NoVideosText>
              <RetryButton onClick={this.onClickRetry} type="button">
                Retry
              </RetryButton>
            </NoVideosContainer>
          )
        }}
      </WatchContext.Consumer>
    ) : (
      <HomeListContainer>
        {homeVideosList.map(eachItem => (
          <HomeVideoCard key={eachItem.id} videoDetails={eachItem} />
        ))}
      </HomeListContainer>
    )
  }

  renderDifferentView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderSuccessView()
      case 'FAILURE':
        return <FailureView callFunction={this.getHomeVideosList} />
      default:
        return <LoaderView />
    }
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDark} = value
          const {searchValue} = this.state
          return (
            <>
              <Header />
              <HomePage>
                <DesktopMenu />
                <HomeContainer>
                  <HomeBanner />
                  <Container data-testid="home" isDark={isDark}>
                    <SearchContainer>
                      <Search
                        onChange={this.updateSearchValue}
                        type="search"
                        placeholder="Search"
                        value={searchValue}
                        isDark={isDark}
                      />
                      <SearchButton
                        onClick={this.onClickSearchButton}
                        data-testid="searchButton"
                        type="button"
                        isDark={isDark}
                      >
                        <SearchIcon as={IoSearchSharp} />
                      </SearchButton>
                    </SearchContainer>
                    {this.renderDifferentView()}
                  </Container>
                </HomeContainer>
              </HomePage>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Home
