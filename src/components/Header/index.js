import {Link, withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import MobileMenu from '../MobileMenu'
import WatchContext from '../../context/WatchContext'
import {
  HeaderContainer,
  WebLogo,
  MenuContainer,
  MenuItem,
  Button,
  Icon,
  ProfileImage,
  LogoutButton,
  PopupContainer,
  Text,
  ButtonContainer,
  CustomButton,
  MobileMenuContainer,
} from './styledComponents'

const Header = props => (
  <WatchContext.Consumer>
    {value => {
      const {isDark, onClickThemeIcon, onClickActiveTab} = value

      const onClickTheme = () => {
        onClickThemeIcon()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const LogoutPopup = triggerValue => (
        <Popup modal trigger={triggerValue}>
          {close => (
            <PopupContainer isDark={isDark}>
              <Text isDark={isDark}>Are you sure, you want to logout?</Text>
              <ButtonContainer>
                <CustomButton onClick={close} type="button" outline>
                  Cancel
                </CustomButton>
                <CustomButton onClick={onClickLogout} type="button">
                  Confirm
                </CustomButton>
              </ButtonContainer>
            </PopupContainer>
          )}
        </Popup>
      )

      const onClickLinkItem = () => onClickActiveTab('HOME')

      return (
        <HeaderContainer isDark={isDark}>
          <Link onClick={onClickLinkItem} to="/">
            <WebLogo
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <MobileMenuContainer>
            <MenuContainer>
              <MenuItem>
                <Button
                  onClick={onClickTheme}
                  data-testid="theme"
                  type="button"
                >
                  {isDark ? <Icon as={FiSun} isDark /> : <Icon as={FaMoon} />}
                </Button>
              </MenuItem>
              <MenuItem>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </MenuItem>
              <MenuItem>
                {LogoutPopup(
                  <LogoutButton isDark={isDark} type="button">
                    Logout
                  </LogoutButton>,
                )}
              </MenuItem>
            </MenuContainer>
          </MobileMenuContainer>
          <MobileMenuContainer mobile>
            <MenuContainer>
              <MenuItem>
                <Button onClick={onClickTheme} type="button">
                  {isDark ? <Icon as={FiSun} isDark /> : <Icon as={FaMoon} />}
                </Button>
              </MenuItem>
              <MenuItem>
                <MobileMenu
                  triggerValue={
                    <Button type="button">
                      <Icon isDark={isDark} as={GiHamburgerMenu} />
                    </Button>
                  }
                />
              </MenuItem>
              <MenuItem>
                {LogoutPopup(
                  <Button type="button">
                    <Icon isDark={isDark} as={FiLogOut} />
                  </Button>,
                )}
              </MenuItem>
            </MenuContainer>
          </MobileMenuContainer>
        </HeaderContainer>
      )
    }}
  </WatchContext.Consumer>
)

export default withRouter(Header)
