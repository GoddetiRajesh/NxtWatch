import styled from 'styled-components'

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  padding: 30px;
  align-self: flex-end;
`
export const CloseIcon = styled.img`
  height: 30px;
  width: 30px;
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const MenuContainer = styled.div`
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
