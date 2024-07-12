import WatchContext from '../../context/WatchContext'

import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  RetryButton,
} from './styledComponents'

const FailureView = props => (
  <WatchContext.Consumer>
    {value => {
      const {isDark} = value
      const {callFunction} = props
      const onClickRetryButton = () => {
        callFunction()
      }
      return (
        <FailureContainer>
          <FailureImage
            src={
              isDark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            }
            alt="failure view"
          />
          <FailureHeading isDark={isDark}>
            Oops! Something Went Wrong
          </FailureHeading>
          <FailureText>
            We are having some trouble to complete your request. <br /> Please
            try again.
          </FailureText>
          <RetryButton onClick={onClickRetryButton} type="button">
            Retry
          </RetryButton>
        </FailureContainer>
      )
    }}
  </WatchContext.Consumer>
)

export default FailureView
