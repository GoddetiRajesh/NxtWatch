import WatchContext from '../../context/WatchContext'
import Menu from '../Menu'

import {
  MenuContainer,
  ContactContainer,
  Heading,
  LogoContainer,
  Logo,
  Text,
} from './styledComponents'

const DesktopMenu = () => (
  <WatchContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <MenuContainer isDark={isDark}>
          <Menu itemWidth="true" />
          <ContactContainer>
            <Heading isDark={isDark}>CONTACT US</Heading>
            <LogoContainer>
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </LogoContainer>
            <Text isDark={isDark}>
              Enjoy! Now to see your channels and recommendations!
            </Text>
          </ContactContainer>
        </MenuContainer>
      )
    }}
  </WatchContext.Consumer>
)

export default DesktopMenu
