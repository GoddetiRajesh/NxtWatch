import Header from '../Header'
import DesktopMenu from '../DesktopMenu'

import {
  NotFoundPage,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosText,
} from './styledComponents'

import WatchContext from '../../context/WatchContext'

const NotFound = () => (
  <WatchContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <>
          <Header />
          <NotFoundPage>
            <DesktopMenu />
            <NoVideosContainer isDark={isDark}>
              <NoVideosImage
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <NoVideosHeading isDark={isDark}>Page Not Found</NoVideosHeading>
              <NoVideosText>
                We are sorry, the page you requested could not be found.
              </NoVideosText>
            </NoVideosContainer>
          </NotFoundPage>
        </>
      )
    }}
  </WatchContext.Consumer>
)

export default NotFound
