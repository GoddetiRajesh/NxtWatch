import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 35vh;
  padding: 20px;
  @media screen and (max-width: 768px) {
    height: 30vh;
  }
`
export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Logo = styled.img`
  height: 40px;
  width: 120px;
`
export const CloseButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`

export const CloseIcon = styled.img`
  height: 25px;
  width: 25px;
`
export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #1e293b;
  width: 40%;
  line-height: 2;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const Button = styled.button`
  border: 1px solid #231f20;
  padding: 8px 15px;
  font-family: 'Roboto';
  font-size: 15px;
  color: #231f20;
  outline: none;
  background-color: transparent;
  margin-top: 10px;
`
