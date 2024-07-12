import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import MenuItems from '../MenuItems'

import {MenuListContainer} from './styledComponents'

const menuList = [
  {id: 'HOME', type: AiFillHome, text: 'Home'},
  {id: 'TRENDING', type: HiFire, text: 'Trending'},
  {id: 'GAMING', type: SiYoutubegaming, text: 'Gaming'},
  {id: 'SAVED_VIDEOS', type: CgPlayListAdd, text: 'Saved videos'},
]

const Menu = props => {
  const {itemWidth} = props
  return (
    <MenuListContainer>
      {menuList.map(eachItem => (
        <MenuItems key={eachItem.id} item={eachItem} itemWidth={itemWidth} />
      ))}
    </MenuListContainer>
  )
}

export default Menu
