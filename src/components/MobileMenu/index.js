import Popup from 'reactjs-popup'
import {IoCloseSharp} from 'react-icons/io5'

import Menu from '../Menu'
import WatchContext from '../../context/WatchContext'

import {
  PopupContainer,
  Button,
  CloseIcon,
  MenuContainer,
} from './styledComponents'

const MobileMenu = props => (
  <WatchContext.Consumer>
    {value => {
      const {isDark} = value
      const {triggerValue} = props
      return (
        <Popup modal trigger={triggerValue}>
          {close => (
            <PopupContainer isDark={isDark}>
              <Button onClick={close} type="text">
                <CloseIcon isDark={isDark} as={IoCloseSharp} />
              </Button>
              <MenuContainer>
                <Menu />
              </MenuContainer>
            </PopupContainer>
          )}
        </Popup>
      )
    }}
  </WatchContext.Consumer>
)

export default MobileMenu
