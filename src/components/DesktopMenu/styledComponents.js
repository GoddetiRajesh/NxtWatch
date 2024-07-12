import styled from 'styled-components'

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  width: 25vw;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  @media screen and (max-width: 765px) {
    display: none;
  }
`
export const ContactContainer = styled.div`
  padding: 20px;
`
export const Heading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 700;
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`
export const Logo = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`
export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
`
