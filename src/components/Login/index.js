import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import WatchContext from '../../context/WatchContext'

import {
  LoginPage,
  LoginForm,
  WebLogo,
  Label,
  Input,
  ShowPasswordConatiner,
  CheckBox,
  Text,
  LoginButton,
  Error,
} from './styledComponents'

class Login extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    errMsg: '',
    showPassword: false,
  }

  updatePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  updateUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  updateShowPassword = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    this.setState({errMsg: ''})
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errMsg => {
    this.setState({errMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {username: usernameInput, password: passwordInput}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDark} = value
          const {
            usernameInput,
            passwordInput,
            errMsg,
            showPassword,
          } = this.state
          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }
          return (
            <LoginPage isDark={isDark}>
              <LoginForm onSubmit={this.onSubmitForm} isDark={isDark}>
                <WebLogo
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <Label isDark={isDark} htmlFor="username">
                  USERNAME
                </Label>
                <Input
                  onChange={this.updateUsername}
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={usernameInput}
                  isDark={isDark}
                />
                <Label isDark={isDark} htmlFor="password">
                  PASSWORD
                </Label>
                <Input
                  onChange={this.updatePassword}
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={passwordInput}
                  isDark={isDark}
                />
                <ShowPasswordConatiner>
                  <CheckBox
                    onClick={this.updateShowPassword}
                    id="showPassword"
                    type="checkbox"
                  />
                  <Text isDark={isDark} htmlFor="showPassword">
                    Show Password
                  </Text>
                </ShowPasswordConatiner>
                <LoginButton type="submit">Login</LoginButton>
                {errMsg !== '' && <Error>{errMsg}</Error>}
              </LoginForm>
            </LoginPage>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Login
