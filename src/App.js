import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import WatchContext from './context/WatchContext'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {isDark: false, savedList: [], activeId: 'HOME'}

  onClickThemeIcon = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  onClickActiveTab = id => {
    this.setState({activeId: id})
  }

  addSavedItems = videoDetails => {
    const {savedList} = this.state
    const isPresent = savedList.find(eachItem => {
      if (eachItem.id === videoDetails.id) {
        return true
      }
      return false
    })
    if (isPresent === undefined) {
      this.setState(prev => ({
        savedList: [...prev.savedList, videoDetails],
      }))
    } else {
      this.setState(prev => ({
        savedList: prev.savedList.filter(
          eachItem => eachItem.id !== videoDetails.id,
        ),
      }))
    }
  }

  render() {
    const {isDark, savedList, activeId} = this.state
    return (
      <WatchContext.Provider
        value={{
          isDark,
          savedList,
          onClickThemeIcon: this.onClickThemeIcon,
          addSavedItems: this.addSavedItems,
          activeId,
          onClickActiveTab: this.onClickActiveTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </WatchContext.Provider>
    )
  }
}

export default App
