import React from 'react'

const WatchContext = React.createContext({
  isDark: false,
  onClickThemeIcon: () => {},
  savedList: [],
  addSavedItems: () => {},
  activeId: '',
  onClickActiveTab: () => {},
})

export default WatchContext
