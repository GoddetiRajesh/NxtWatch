import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 13vh;
  padding-left: 15px;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  @media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-right: 20px;
  }
`
export const WebLogo = styled.img`
  height: 40px;
  width: 120px;
  text-decoration: none;
  color: transparent;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`
export const MobileMenuContainer = styled.div`
  display: ${props => (props.mobile ? 'flex' : 'none')};
  @media screen and (min-width: 768px) {
    display: ${props => (props.mobile ? 'none' : 'flex')};
  }
`

export const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
`

export const MenuItem = styled.li`
  margin-right: 20px;
`
export const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
`
export const Icon = styled.img`
  height: 25px;
  width: 25px;
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
`
export const LogoutButton = styled.button`
  color: ${props => (props.isDark ? 'white' : '#3b82f6')};
  border: ${props => (props.isDark ? '1px solid white' : '1px solid #3b82f6')};
  border-radius: 2px;
  background-color: transparent;
  padding: 8px 15px;
  font-family: 'Roboto';
  font-size: 18px;
  outline: none;
  cursor: pointer;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 160px;
  border-radius: 10px;
  background-color: ${props => (props.isDark ? '#231f20' : '#ffffff')};
`
export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDark ? 'white' : '#00306e')};
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  width: 100%;
`

export const CustomButton = styled(LogoutButton)`
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  color: ${props => (props.outline ? '#94a3b8' : 'white')};
  border: ${props => (props.outline ? '1px solid #94a3b8' : 'none')};
`
