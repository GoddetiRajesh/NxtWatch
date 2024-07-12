import {Link, withRouter} from 'react-router-dom'

import WatchContext from '../../context/WatchContext'

import {ItemLink, Item, Icon, Text} from './styledComponents'

const paths = {
  HOME: '/',
  TRENDING: '/trending',
  GAMING: '/gaming',
  SAVED_VIDEOS: '/saved-videos',
}

const MenuItems = props => (
  <WatchContext.Consumer>
    {value => {
      const {isDark, activeId, onClickActiveTab} = value
      const {item, itemWidth} = props
      const {id, type, text} = item
      const activeTab = activeId === id
      const onClickTabItem = () => {
        onClickActiveTab(id)
      }

      return (
        <ItemLink onClick={onClickTabItem} as={Link} to={paths[id]}>
          <Item isDark={isDark} activeTab={activeTab}>
            <Icon as={type} activeTab={activeTab} />
            <Text itemWidth={itemWidth} isDark={isDark} activeTab={activeTab}>
              {text}
            </Text>
          </Item>
        </ItemLink>
      )
    }}
  </WatchContext.Consumer>
)

export default withRouter(MenuItems)
