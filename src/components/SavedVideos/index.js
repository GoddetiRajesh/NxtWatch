import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import DesktopMenu from '../DesktopMenu'
import WatchContext from '../../context/WatchContext'
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
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosText,
} from './styledComponents'

const SavedVideos = () => (
  <WatchContext.Consumer>
    {value => {
      const {isDark, savedList} = value
      return (
        <>
          <Header />
          <TrendingPage>
            <DesktopMenu />
            <TrendingContainer>
              <TrendingBanner data-testid="banner" isDark={isDark}>
                <IconContainer isDark={isDark}>
                  <Icon as={CgPlayListAdd} />
                </IconContainer>
                <Heading isDark={isDark}>Saved Videos</Heading>
              </TrendingBanner>
              <TrendingVideosContainer
                data-testid="savedVideos"
                isDark={isDark}
              >
                {savedList.length === 0 ? (
                  <NoVideosContainer>
                    <NoVideosImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <NoVideosHeading isDark={isDark}>
                      No saved videos Found
                    </NoVideosHeading>
                    <NoVideosText>
                      You can save your videos while watching them
                    </NoVideosText>
                  </NoVideosContainer>
                ) : (
                  <TrendingListContainer>
                    {savedList.map(eachItem => (
                      <TrendingVideoCard
                        key={eachItem.id}
                        videoDetails={eachItem}
                      />
                    ))}
                  </TrendingListContainer>
                )}
              </TrendingVideosContainer>
            </TrendingContainer>
          </TrendingPage>
        </>
      )
    }}
  </WatchContext.Consumer>
)

export default SavedVideos
