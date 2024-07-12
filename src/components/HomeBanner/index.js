import {Component} from 'react'
import {IoCloseSharp} from 'react-icons/io5'

import {
  BannerContainer,
  LogoContainer,
  Logo,
  CloseButton,
  CloseIcon,
  Text,
  Button,
} from './styledComponents'

class HomeBanner extends Component {
  state = {displayBanner: true}

  onClickCloseButton = () => {
    this.setState({displayBanner: false})
  }

  render() {
    const {displayBanner} = this.state
    return (
      displayBanner === true && (
        <BannerContainer data-testid="banner">
          <LogoContainer>
            <Logo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <CloseButton
              onClick={this.onClickCloseButton}
              data-testid="close"
              type="button"
            >
              <CloseIcon as={IoCloseSharp} />
            </CloseButton>
          </LogoContainer>
          <Text>Buy Nxt Watch Premium prepaid plans with UPI</Text>
          <Button type="button">GET IT NOW</Button>
        </BannerContainer>
      )
    )
  }
}

export default HomeBanner
